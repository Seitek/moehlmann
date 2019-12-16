import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
//import { deletePost } from '../../actions/postActions';
//import Spinner from '../common/Spinner';
//import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import {deleteNutzer, getNutzers} from '../../actions/nutzerActions';




class myPosts extends Component {
    componentDidMount() {
        // this.props.getUserPosts();
    }

    onDeleteClick(code) {
       this.props.deleteNutzer(code, this.props.history);
       this.props.getNutzers();
    }


    render() {

     
        const {nutzers, loading} = this.props.nutzer;

        let postContent;
        //let spinner;
        let errortext;


        if (nutzers === null || loading) {
           // spinner = <Spinner />
        } else {

            // Test, ob bereits ein Beitrag vorhanden ist.
            let Nutzername = "";
            nutzers.map(nutzer => (
                Nutzername = nutzer.vorname
            ));

            if (Nutzername === "") {
                errortext = "Es wurde noch kein Nutzer hinzugefügt.";
            }
            else {
                postContent = nutzers.map(nutzer => (
                    <React.Fragment>
                    <tr key={nutzer._id} >
                        <td>{nutzer.vorname}</td>
                        <td>{nutzer.nachname}</td>
                        <td>{nutzer.code}</td>
                        <td><Link to={`/postedit/${nutzer._id}`} className="btn btn-info">Aufträge bearbeiten</Link></td>
                        <td><Link to={`/postedit/${nutzer._id}`} className="btn btn-secondary">Nutzer bearbeiten</Link></td>
                        <td><button onClick={this.onDeleteClick.bind(this, nutzer.code)} className="btn btn-danger">Nutzer löschen</button></td>
                    </tr>
                    </React.Fragment>
                    
                   
                ));
            }


        }


        return (
            <div>
                <h4 className="mb-4">Nutzerliste</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Vorname</th>
                            <th>Nachname</th>
                            <th>Code</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>

                        {errortext}
                        <tbody>
                        {postContent}
                        </tbody>

                </table>
              
            </div>
        )
    }
}

myPosts.propTypes = {
    nutzer: PropTypes.object.isRequired,
    deleteNutzer: PropTypes.func.isRequired,
    getNutzers: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    nutzer: state.nutzer
});


export default connect(mapStateToProps, {deleteNutzer, getNutzers})(withRouter(myPosts));