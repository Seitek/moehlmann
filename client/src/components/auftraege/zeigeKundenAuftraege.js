import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { completeFahrt, abortFahrt, getFahrten } from '../../actions/fahrtenActions';
//import Spinner from '../common/Spinner';
//import Moment from 'react-moment';
import { Link } from 'react-router-dom';




class myPosts extends Component {
    componentDidMount() {
        // this.props.getUserPosts();
    }

    onCompleteClick(auftragnr) {
        this.props.completeFahrt(auftragnr, this.props.history);
        this.props.getFahrten();
    }

    onAbortClick(auftragnr) {
        this.props.abortFahrt(auftragnr, this.props.history);
        this.props.getFahrten();
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

            fahrten
            .filter(fahrt => !fahrt.ist_abgeschlossen && !fahrt.ist_geloescht)
            .map(fahrt => {return(Auftragnr = fahrt.auftragnr)});
            

            if (Auftragnr === "") {
                errortext = "Keine offenen Aufträge.";
            }
            else {
                postContent = fahrten
                .filter(fahrt => !fahrt.ist_abgeschlossen && !fahrt.ist_geloescht && fahrt.kundeVorname === this.props.match.params.vorname && fahrt.kundeNachname === this.props.match.params.nachname)
                .map(fahrt => {return(
                    <React.Fragment>
                     <tr key={fahrt._id} >
                        <td>{fahrt.auftragnr}</td>
                        <td>{fahrt.kundeVorname} {fahrt.kundeNachname}</td>
                        <td>{fahrt.vonStrasse} {fahrt.vonHausnummer} <br/> {fahrt.vonPlz} {fahrt.vonOrt}</td>
                        <td>{fahrt.nachStrasse} {fahrt.nachHausnummer}<br/> {fahrt.nachPlz} {fahrt.nachOrt}</td>
                        <td>{fahrt.vonUhrzeit} - {fahrt.nachUhrzeit}</td>
                        <td><Link to={`/postedit/${fahrt._id}`} className="btn btn-info">Mehr Infos</Link></td>
                        <td><button onClick={this.onCompleteClick.bind(this, fahrt.auftragnr)} className="btn btn-primary">Auftrag abschließen</button></td>
                        <td><button onClick={this.onAbortClick.bind(this, fahrt.auftragnr)} className="btn btn-link">Auftrag abbrechen</button></td>
                     </tr>
                    </React.Fragment>
                    )
                    });
            }


        }


        return (
            <div>
                <div className="row">
                <div className="col-md-12">
                <div className="row">
                <div className="col py-2 my-3 mr-2 fenster f-halb">
                <h4 className="mb-4"><Link to="/" className="btn btn-light">
                  <i className="fas fa-angle-left text-info" /> Zurück zum
                  Dashboard
                </Link><p/>
                Offene Aufträge</h4>
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
                
                </div>
                </div>
                </div>
            </div>
        )
    }
}

myPosts.propTypes = {
    fahrten: PropTypes.object.isRequired,
    completeFahrt: PropTypes.func.isRequired,
    abortFahrt: PropTypes.func.isRequired,
    getFahrten: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    fahrten: state.fahrten
});


export default connect(mapStateToProps, {completeFahrt, abortFahrt, getFahrten})(withRouter(myPosts));