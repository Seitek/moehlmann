import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
//import { deletePost } from '../../actions/postActions';
//import Spinner from '../common/Spinner';
//import Moment from 'react-moment';
import { Link } from 'react-router-dom';




class myPosts extends Component {
    componentDidMount() {
        // this.props.getUserPosts();
    }

    onDeleteClick(id) {
     //   this.props.deletePost(id, this.props.history);
    }


    render() {

     
        const {fahrten, loading} = this.props.fahrten;

        let postContent;
        //let spinner;
        let errortext;


        if (fahrten === null || loading) {
           // spinner = <Spinner />
        } else {

            // Test, ob bereits ein Beitrag vorhanden ist.
            let Auftragnr = "";
            fahrten.map(fahrt => (
                Auftragnr = fahrt.auftragnr
            ));

            if (Auftragnr === "") {
                errortext = "Es wurde noch keine Fahrt hinzugefügt.";
            }
            else {
                postContent = fahrten.map(fahrt => (
                
                    <React.Fragment>
                    <tr key={fahrt._id} >
                        <td>{fahrt.auftragnr}</td>
                        <td>{fahrt.kundeVorname} {fahrt.kundeNachname}</td>
                        <td>{fahrt.vonStrasse} {fahrt.vonHausnummer} <br/> {fahrt.vonPlz} {fahrt.vonOrt}</td>
                        <td>{fahrt.nachStrasse} {fahrt.nachHausnummer}<br/> {fahrt.nachPlz} {fahrt.nachOrt}</td>
                        <td>{fahrt.vonUhrzeit} - {fahrt.nachUhrzeit}</td>
                        <td><Link to={`/postedit/${fahrt._id}`} className="btn btn-info">Mehr Infos</Link></td>
                        <td><Link to={`/postedit/${fahrt._id}`} className="btn btn-primary">Auftrag abgeschlossen</Link></td>
                        <td><Link to={`/postedit/${fahrt._id}`} className="btn btn-link">Auftrag abbrechen</Link></td>
                    </tr>
                    </React.Fragment>
                    
                   
                ));
            }


        }


        return (
            <div>
                <h4 className="mb-4">Offene Aufträge</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Auftrags-Nr.</th>
                            <th>Kunde</th>
                            <th>Von</th>
                            <th>Nach</th>
                            <th>Uhrzeit</th>
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
    fahrten: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    fahrten: state.fahrten
});


export default connect(mapStateToProps)(withRouter(myPosts));