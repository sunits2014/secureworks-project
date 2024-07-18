import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { QueryConstant } from "../grid-data/query.constant";
import { ApolloQueryResult } from "@apollo/client/core";
import { Observable, from } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class GraphQLService {

    private gqlQuery: any;

    constructor(private apollo: Apollo) {
        this.gqlQuery = gql`${QueryConstant.Query}`;
    }

    public getRepos(): Observable<any> {
        return from(this.getReposAsPromise());
    }

    private getReposAsPromise(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apollo
                .watchQuery({
                    query: this.gqlQuery,
                    variables: {
                        owner: "MichaelCurrin",
                    },
                })
                .valueChanges.subscribe(({ data }) => {
                    resolve(data);
                });
        });
    }
}