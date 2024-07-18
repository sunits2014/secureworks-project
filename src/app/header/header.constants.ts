export class HeaderConstants {

    static readonly Home = {
        header: "Hi, Welcome",
        info: "This project is the UI Challenge project from Secureworks for the role of Sr. Principal Front End Engineer. It is about creating an Angular project that connects to Github's GraphQL APIs to get a user's repositories. Once the data is received, the next step is the presentation."
    }

    static readonly GridData = {
        header: "Grid Data",
        info: "This is the Grid Component that is making an API call to the GitHub GraphQL API to get the user's repositories. The response is received and Columns are added and Rows assigned."
    }

    static readonly ChartData = {
        header: "D3 Bar Chart",
        info: "This is the Bar Chart component from D3. This is a basic chart component displaying the no. of stars per repository. The data is fetched from the store and displayed on the chart using D3. The data is a collection of repositories that have atleast 1 star."
    }
}