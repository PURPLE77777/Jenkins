import React from "react";
import "../styles/info.css";

function Info() {
    return (
        <div className="info">
            <div className="some-info">
                <h2 className="some-info_title">
                    DevOps Dozen 2017: Best DevOps Open Source Project
                </h2>
                <span className="some-info_text">
                    Jenkins is one of the leading open source automation servers
                    available. Jenkins has an extensible, plugin-based
                    architecture, enabling developers to create 1,400+ plugins
                    to adapt it to a multitude of build, test and deployment
                    technology integrations. In 2017, Jenkins surpassed 155,000
                    active installations (these are active installations that
                    report usage back to the Jenkins project—only a fraction of
                    total installations), and approximately 1.5 million users,
                    making it the most widely deployed continuous delivery
                    automation server in the world.
                </span>
            </div>
            <div className="some-info">
                <h2 className="some-info_title">
                    DevOps Dozen 2016: Best DevOps Open Source Project
                </h2>
                <span className="some-info_text">
                    The DevOps world is chock full of great open source
                    projects. Many of them have huge communities who are very
                    passionate and involved. The Jenkins community holds its own
                    with any of them. More importantly, Jenkins seems to be at
                    the center of the DevOps/CD world.
                </span>
            </div>
            <div className="some-info">
                <h2 className="some-info_title">
                    Bossie Awards 2014: The best open source application
                    development tools
                </h2>
                <span className="some-info_text">
                    Jenkins is an extendable, open source continuous integration
                    server that monitors executions of repeated jobs, such as
                    building a software project or jobs run by cron. … There are
                    hundreds of Jenkins plug-ins in the categories of source
                    code management, build triggers, build tools, build
                    wrappers, build notifiers, agent launchers and controllers,
                    build reports, artifact uploaders, and many more.
                </span>
            </div>
        </div>
    );
}

export default Info;
