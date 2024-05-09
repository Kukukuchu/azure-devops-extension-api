/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
/**
 * Describes board item batch operation types.
 */
export var BoardItemBatchOperationTypeEnum;
(function (BoardItemBatchOperationTypeEnum) {
    /**
     * Move a batch of items to a different location. The order of the items is implicit in the list of items and a single location is specified.
     */
    BoardItemBatchOperationTypeEnum[BoardItemBatchOperationTypeEnum["Reorder"] = 1] = "Reorder";
})(BoardItemBatchOperationTypeEnum || (BoardItemBatchOperationTypeEnum = {}));
export var BoardTypeEnum;
(function (BoardTypeEnum) {
    BoardTypeEnum[BoardTypeEnum["IdBoundBoard"] = 1] = "IdBoundBoard";
    BoardTypeEnum[BoardTypeEnum["QueryBoundBoard"] = 2] = "QueryBoundBoard";
    BoardTypeEnum[BoardTypeEnum["KanbanBoard"] = 3] = "KanbanBoard";
    BoardTypeEnum[BoardTypeEnum["TaskBoard"] = 4] = "TaskBoard";
})(BoardTypeEnum || (BoardTypeEnum = {}));
