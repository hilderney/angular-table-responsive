import { MatPaginator } from "@angular/material/paginator";

export class TranslateTable {

  translate(paginator: MatPaginator): MatPaginator {
    paginator._intl.itemsPerPageLabel = 'Registros por página';
    paginator._intl.getRangeLabel = (page, pageSize, length) => {
      if (length === 0 || pageSize === 0) {
        return '0 de ' + length;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex =
        startIndex < length
          ? Math.min(startIndex + pageSize, length)
          : startIndex + pageSize;
      return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
    };
    return paginator;
  }

}
