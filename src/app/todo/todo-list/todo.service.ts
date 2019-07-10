import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {
    allItemsQuery = gql`
    query {
      all {
        id
        name
        category
        priority
        description
        contents
      }
    }`;
    public todos: Todo[] = [];
    constructor(private apollo: Apollo, private http: HttpClient) { }

    getAllItems(): QueryRef<any> {
      return this.apollo
      .watchQuery({
        query: this.allItemsQuery
      });
    }

    createItem(item: any) {
      const url = 'https://fb-devc-graphqltodoapp.azurewebsites.net/api/Item';
      const { name, category, priority, description, contents } = item;
      return this.http.post(url, { name, category, priority, description, contents });
    }
}
