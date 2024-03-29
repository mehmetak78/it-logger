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
