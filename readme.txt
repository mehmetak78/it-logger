- Create React Application
    Use Webstorm New Project
- Install json-server, concurrently as dev dependency
    mehmetak@MEHMETs-MacBook-Pro it-logger % npm install -D json-server concurrently
- json-server will be the backend for this project
    - Create a db.json file in the root folder
    - In package.json add to scripts
        "json-server": "json-server --watch db.json --port 5000",
        "dev": "concurrently \"npm start\" \"npm run json-server\""
- Add proxy to the package.json
      "proxy": "http://localhost:5000"
- Establish Redux
    - Install dependencies
        mehmetak@MEHMETs-MacBook-Pro it-logger % npm install redux redux-devtools-extension redux-thunk react-redux  moment react-moment
    - Create a directory called "redux" under the folder "src"
        - Create a file called "store.js" in the "redux" folder.
        - Create a directory called "actions" in the "redux" folder
            - Create a file called "logActions.js" in the "actions" folder
            - Create a file called "actionTypes.js" in the "actions" folder
        - Create a directory called "reducers" in the "redux" folder
            - Create a file called "rootReducer.js" in "reducers" folder
            - Create other reducers as they are required
    - The Folder Structure Will Be
        src
            redux
                actions
                    logActions.js
                    techActions.js
                    actionTypes.js
                reducers
                    logReducer.js
                    rootReducer.js
                    techReducer.js
                store.js

- Using Redux (Sample Component)
        import React, {useEffect} from 'react';
        import {connect} from "react-redux"
        import LogItem from "./LogItem";
        import Preloader from "../layout/Preloader";
        import PropTypes from "prop-types";

        import {getLogs} from "../../redux/actions/logActions";

        const Logs = (props) => {

            const {logs, loading} = props.log;
            const {getLogs} = props;

            useEffect(() => {
                getLogs();
                // eslint-disable-next-line
            },[]);

            if (loading ||logs=== null) {
                return <Preloader/>
            }

            return (
                <ul className="collection with-header">
                    <li className="collection-header">
                        <h4 className="center">
                            System Logs
                        </h4>
                    </li>
                    {!loading && logs.length === 0 ? (<p className="center"> No logs to show....</p>)
                        : (logs.map(log => <LogItem log={log} key={log.id}/>))}
                </ul>
            );
        };

        Logs.propTypes = {
            log: PropTypes.object.isRequired,
            getLogs: PropTypes.func.isRequired
        };

        const mapStateToProps = state => (
            {
                log: state.log
            }
        );

        function mapDispatchToProps() {
            return {getLogs}
        }

        export default connect(mapStateToProps,mapDispatchToProps())(Logs);

- In general
    - Write the action
    - Write the reducer
    - Connect component and use it

- Use Materializecss
    https://materializecss.com/
    - Install it instead of using cdn for this project.
        npm install materialize-css
    - Import in App.js
        import "materialize-css/dist/css/materialize.min.css";
        import M from "materialize-css/dist/js/materialize.min";
    - To initialize Materialize JS, in App.js
        useEffect(() => {
            // Initialize Materizlize JS
            M.AutoInit();
        });
    - For using the Material Design Icons
        https://google.github.io/material-design-icons/
        - Copy into the index.html
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

