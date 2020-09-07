import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { completeFahrt, abortFahrt, getFahrten } from '../../actions/fahrtenActions';
//import Spinner from '../common/Spinner';
//import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import Pagination from './Pagination'




class myPosts extends Component {
    constructor(props) {
        super(props);

        //Pagination
        this.state = {
         loading: true,
         currentPage: 1,
         postsPerPage: 10,
         totalPosts: 0,
        }

       //Pagination
       this.setTotalPosts = this.setTotalPosts.bind(this);
    }

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

    setTotalPosts(length){
        this.setState({totalPosts: length, loading: false});
    }

    render() {

     
        const {fahrten, loading} = this.props.fahrten;
        const {nutzers} = this.props.nutzer;

        let postContent;
        //let spinner;
        let errortext;


        if (fahrten === null || loading) {
           // spinner = <Spinner />
        } else {

            
            

            // Pagination
         if (this.state.totalPosts === 0 && this.state.loading === true){this.setTotalPosts(fahrten.length)};
         const indexOFLastPost = this.state.currentPage * this.state.postsPerPage;
         const indexOfFirstPost = indexOFLastPost - this.state.postsPerPage;

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
                .filter(fahrt => !fahrt.ist_abgeschlossen && !fahrt.ist_geloescht)
                .slice(indexOfFirstPost, indexOFLastPost)
                .map(fahrt => {
                   const nutzerName = nutzers.filter(nutz => nutz.code === fahrt.nutzercode)
            
                    return(<React.Fragment>
                    <tr key={fahrt._id} >
                        <td>{fahrt.auftragnr}</td>
                    <td>{nutzerName[0].vorname} {nutzerName[0].nachname}</td>
                        <td>{fahrt.kundeVorname} {fahrt.kundeNachname}</td>
                        <td>{fahrt.vonStrasse} {fahrt.vonHausnummer} <br/> {fahrt.vonPlz} {fahrt.vonOrt}</td>
                        <td>{fahrt.nachStrasse} {fahrt.nachHausnummer}<br/> {fahrt.nachPlz} {fahrt.nachOrt}</td>
                        <td>{fahrt.vonUhrzeit} - {fahrt.nachUhrzeit}</td>
                        <td><Link to={`/postedit/${fahrt._id}`} className="btn btn-info">Mehr Infos</Link></td>
                        <td><button onClick={this.onCompleteClick.bind(this, fahrt.auftragnr)} className="btn btn-primary">Auftrag abschließen</button></td>
                        <td><button onClick={this.onAbortClick.bind(this, fahrt.auftragnr)} className="btn btn-link">Auftrag abbrechen</button></td>
                    </tr>
                    </React.Fragment>)
                    });
            }


        }

        const paginate = (pageNumber) => this.setState({currentPage: pageNumber});

        return (
            <div>
                <h4 className="mb-4">Offene Aufträge</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Auftrags-Nr.</th>
                            <th>Nutzer</th>
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
                        <Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.state.totalPosts} paginate={paginate}/>
                        </tbody>

                </table>
              
            </div>
        )
    }
}

myPosts.propTypes = {
    fahrten: PropTypes.object.isRequired,
    nutzer: PropTypes.object.isRequired,
    completeFahrt: PropTypes.func.isRequired,
    abortFahrt: PropTypes.func.isRequired,
    getFahrten: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    fahrten: state.fahrten,
    nutzer: state.nutzer
});


export default connect(mapStateToProps, {completeFahrt, abortFahrt, getFahrten})(withRouter(myPosts));