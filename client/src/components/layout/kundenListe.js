import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
//import { deletePost } from '../../actions/postActions';
//import Spinner from '../common/Spinner';
//import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import {deleteKunden, getKunden} from '../../actions/kundenActions';
import Pagination from './Pagination'




class myPosts extends Component {
    constructor(props) {
        super(props);

        //Pagination
        this.state = {
         loading: true,
         currentPage: 1,
         postsPerPage: 5,
         totalPosts: 0,
        }

       //Pagination
       this.setTotalPosts = this.setTotalPosts.bind(this);
    }

    componentDidMount() {
        // this.props.getUserPosts();
    }

    onDeleteClick(id) {
       this.props.deleteKunden(id, this.props.history);
       this.props.getKunden();
    }

    setTotalPosts(length){
        this.setState({totalPosts: length, loading: false});
    }

    render() {

     
        const {kunden, loading} = this.props.kunden;

        let postContent;
        //let spinner;
        let errortext;


        if (kunden === null || loading) {
           // spinner = <Spinner />
        } else {

              // Pagination
         if (this.state.totalPosts === 0 && this.state.loading === true){this.setTotalPosts(kunden.length)};
         const indexOFLastPost = this.state.currentPage * this.state.postsPerPage;
         const indexOfFirstPost = indexOFLastPost - this.state.postsPerPage;

            // Test, ob bereits ein Beitrag vorhanden ist.
            let Nutzername = "";
            kunden.map(kunden => (
                Nutzername = kunden.vorname
            ));

            if (Nutzername === "") {
                errortext = "Es wurde noch kein Kunde hinzugefügt.";
            }
            else {
                postContent = kunden
                .slice(indexOfFirstPost, indexOFLastPost)
                .map(kunden => (
                    <React.Fragment>
                    <tr key={kunden._id} >
                        <td>{kunden.vorname}</td>
                        <td>{kunden.nachname}</td>
                        <td>{kunden.strasse} {kunden.hausnummer}<br/>{kunden.plz} {kunden.ort}</td>
                        <td><Link to={`/kundenauftraege/${kunden.vorname}/${kunden.nachname}`} className="btn btn-info">Aufträge anzeigen</Link></td>
                        <td><Link to={`/kundenedit/${kunden._id}`} className="btn btn-secondary">Kunde bearbeiten</Link></td>
                        <td><button onClick={this.onDeleteClick.bind(this, kunden._id)} className="btn btn-danger">Kunde löschen</button></td>
                    </tr>
                    </React.Fragment>
                    
                   
                ));
            }


        }

        const paginate = (pageNumber) => this.setState({currentPage: pageNumber});

        return (
            <div>
                <h4 className="mb-4">Kundenliste</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Vorname</th>
                            <th>Nachname</th>
                            <th>Adresse</th>
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
    kunden: PropTypes.object.isRequired,
    deleteKunden: PropTypes.func.isRequired,
    getKunden: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    kunden: state.kunden
});


export default connect(mapStateToProps, {deleteKunden, getKunden})(withRouter(myPosts));