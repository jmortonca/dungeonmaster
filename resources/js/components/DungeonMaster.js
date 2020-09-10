import React from 'react';
import ReactDOM from 'react-dom';

const DungeonMaster = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Logged In State</div>

                        <div className="card-body">You're Logged In. Yay.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DungeonMaster;

if (document.getElementById('dungeonmaster')) {
    ReactDOM.render(<DungeonMaster />, document.getElementById('dungeonmaster'));
}
