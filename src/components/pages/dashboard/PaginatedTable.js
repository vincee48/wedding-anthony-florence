'use strict';

var React = require('react/addons');

require('styles/pages/dashboard/PaginatedTable.less');

var PaginatedTable = React.createClass({

    getInitialState: function() {
        return {
            recordsPerPage: 5,
            currentPage: 1
        };
    },
    togglePage: function(e) {
        e.preventDefault();
        var numPages = Math.ceil(this.props.records.length / this.state.recordsPerPage);

        if (e.target.id >= 1 && e.target.id <= numPages) {
            this.setState({currentPage: parseInt(e.target.id)});
        }
    },
    render: function () {

        var numPages = Math.ceil(this.props.records.length / this.state.recordsPerPage);
        var pages = [];
        var data = [];
        for (var i = 1; i <= numPages; i++) {
            pages.push(<li onClick={this.togglePage} key={i} className={i === this.state.currentPage ? 'active' : ''}><a id={i} href="#">{i}</a></li>);
        }
        var startRecord = (this.state.currentPage - 1) * this.state.recordsPerPage;
        var recordLimit = this.props.records.length < (this.state.currentPage) * this.state.recordsPerPage ? this.props.records.length : (this.state.currentPage) * this.state.recordsPerPage;
        for (var j = startRecord; j < recordLimit; j++) {
            data.push(this.props.records[j]);
        }

        var disablePrev = this.state.currentPage === 1;

        var display;
        if (this.props.records.length > 0) {
            display = data.map(function(rec) {
                return (<tr key={rec.id}>
                    <td>{ rec.name }</td>
                    <td>{ rec.email }</td>
                    <td>{ rec.attendees }</td>
                    <td>{ rec.responded ? 'Yes' : 'No' }</td>
                </tr>);
            });
        }

        return (
            <div className="PaginatedTable">

                <table className="table table-striped table-bordered">
                    <thead>
                        <tr><th>Name</th><th>Email</th><th>Attendees</th><th>Responded</th></tr>
                    </thead>

                    <tbody>
                        {display}
                    </tbody>
                </table>

                <ul className="pagination">
                    <li onClick={this.togglePage} className={ disablePrev  ? 'disabled' : '' }>
                        <a id={parseInt(this.state.currentPage)-1} href="#" aria-label="Previous">
                            <span id={parseInt(this.state.currentPage)-1} aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                    {pages}

                    <li onClick={this.togglePage} className={ this.state.currentPage === pages.length ? 'disabled' : '' }>
                        <a id={parseInt(this.state.currentPage)+1} href="#" aria-label="Next">
                            <span id={parseInt(this.state.currentPage)+1} aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = PaginatedTable;

