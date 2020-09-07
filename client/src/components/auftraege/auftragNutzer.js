import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
//import { deletePost } from '../../actions/postActions';
//import Spinner from '../common/Spinner';
//import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import {deleteNutzer, getNutzers} from '../../actions/nutzerActions';
import Pagination from '../layout/Pagination'



class AuftragNutzer extends Component {
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

    onDeleteClick(code) {
       this.props.deleteNutzer(code, this.props.history);
       this.props.getNutzers();
    }

    setTotalPosts(length){
        this.setState({totalPosts: length, loading: false});
    }

    

    render() {

     
        const {nutzers, loading} = this.props.nutzer;


      

        let postContent;
        //let spinner;
        let errortext;

        


        if (nutzers === null || loading) {
           // spinner = <Spinner />
        } else {

             // Pagination
         if (this.state.totalPosts === 0 && this.state.loading === true){this.setTotalPosts(nutzers.length)};
         const indexOFLastPost = this.state.currentPage * this.state.postsPerPage;
         const indexOfFirstPost = indexOFLastPost - this.state.postsPerPage;

            // Test, ob bereits ein Beitrag vorhanden ist.
            let Nutzername = "";
            nutzers.map(nutzer => (
                Nutzername = nutzer.vorname
            ));

            if (Nutzername === "") {
                errortext = "Es wurde noch kein Nutzer hinzugefügt.";
            }
            else {
                postContent = nutzers
                .slice(indexOfFirstPost, indexOFLastPost)
                .map(nutzer => (
                    <React.Fragment>
                    <tr key={nutzer._id} >
                        <td>{nutzer.vorname}</td>
                        <td>{nutzer.nachname}</td>
                        <td>{nutzer.code}</td>
                        {/* <td><Link to={`/nutzerauftraege/${nutzer.code}`} className="btn btn-info">Aufträge bearbeiten</Link></td>
                        <td><Link to={`/postedit/${nutzer._id}`} className="btn btn-secondary">Nutzer bearbeiten</Link></td> */}
                        <td><button onClick={this.onDeleteClick.bind(this, nutzer.code)} className="btn btn-info">Nutzer auswählen</button></td>
                    </tr>
                    </React.Fragment>
                    
                   
                ));
            }


        }

        const paginate = (pageNumber) => this.setState({currentPage: pageNumber});

        return (
            <div>
                {/* import Kundenliste from "./auftragKunden";
 */}
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Vorname</th>
                            <th>Nachname</th>
                            <th>Code</th>
                            {/* <th></th>
                            <th></th> */}
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

AuftragNutzer.propTypes = {
    nutzer: PropTypes.object.isRequired,
    deleteNutzer: PropTypes.func.isRequired,
    getNutzers: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    nutzer: state.nutzer
});


export default connect(mapStateToProps, {deleteNutzer, getNutzers})(withRouter(AuftragNutzer));