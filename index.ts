import { TreeViewUtils } from '@alchemisten/tree-view-utils'

type TreeViewData = {
    dataId: string
    parentDataId: string | undefined
    prop1: string
    prop2: string
}

const data: TreeViewData[] = [
    {
        dataId: '1',
        parentDataId: undefined,
        prop1: 'a',
        prop2: 'b'
    },
    {
        dataId: '2',
        parentDataId: '1',
        prop1: 'aa',
        prop2: 'b'
    },
    {
        dataId: '3',
        parentDataId: '2',
        prop1: 'aa',
        prop2: 'c'
    },
    {
        dataId: '4',
        parentDataId: '2',
        prop1: 'dd',
        prop2: 'c'
    },
]

const hierarchy = TreeViewUtils.createHierarchy(data, undefined, data => data.dataId, data => data.parentDataId)
console.log(hierarchy)
console.log(TreeViewUtils.getRootElements(hierarchy));
