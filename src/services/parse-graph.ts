import { ConnectedInfo } from 'global-type';
import { GraphData, Edge } from '@/types/graph';

export type VertexString = `${string} ${string} ${number}`;

/**
 * @description 중복 및 정점 갯수를 정리하는 함수
   1. 중복되는 정점 연결이 있는지 확인하기 위해 정점을 추출해 정렬한다.
   2. 중복 정점을 찾아낸다.
 */
export const getVertexList = (inputValue: string[]): Array<VertexString> => {
  return inputValue
    .map((item): VertexString => {
      const [vertex1, vertex2, cost] = item.split(' ');
      return vertex1 < vertex2 ? `${vertex1} ${vertex2} ${Number(cost)}` : `${vertex2} ${vertex1} ${Number(cost)}`;
    })
    .reduce((acc, item) => {
      const [vertex1, vertex2] = item.split(' ');
      const vertexs = `${vertex1}${vertex2}`;

      const x = acc.find((v) => {
        const [v1, v2] = v.split(' ');
        const vs = `${v1}${v2}`;
        return vertexs === vs;
      });

      if (!x) {
        return [...acc, item];
      }

      return acc;
    }, [] as Array<VertexString>);
};

export const createGraph = (textAreaContent: string, LIMIT_INPUT_VALUE_LINE = 100) => {
  const inputValue = textAreaContent.split('\n');

  const vertexList = getVertexList(inputValue);

  const graph = vertexList.reduce((acc, item, idx) => {
    const [vertex1, vertex2, cost] = item.split(' ');

    if (idx >= LIMIT_INPUT_VALUE_LINE) return acc;

    if (vertex1 === '') return acc;

    acc[vertex1] = acc[vertex1] || [];

    if (vertex2 === undefined && cost === undefined) return acc;

    if (vertex2 === '') return acc;

    acc[vertex1].push({ vertex: vertex2, cost });

    return acc;
  }, {} as ConnectedInfo);

  return { graph };
};

/** @description 입력값을 d3 nodesimullink 타입으로 파싱하는 함수 */
export const parseGraph = (textAreaContent: string, LIMIT_INPUT_VALUE_LINE = 100): GraphData => {
  const inputValue = textAreaContent.split('\n');
  const nodeInfo = new Set<string>();

  const links = inputValue.reduce((acc, value, idx) => {
    const [source, target, cost] = value.split(' ');

    if (!source || !target || idx >= LIMIT_INPUT_VALUE_LINE) {
      return acc;
    }

    nodeInfo.add(source);
    nodeInfo.add(target);

    return [...acc, { source, target, cost: Number.isNaN(Number(cost)) ? undefined : cost }];
  }, [] as Array<Edge>);

  return {
    nodes: Array.from(nodeInfo).map((value) => ({ value })),
    links,
  };
};
