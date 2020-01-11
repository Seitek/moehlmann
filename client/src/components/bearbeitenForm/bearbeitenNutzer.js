import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateNutzer, getNutzer } from "../../actions/nutzerActions";
//import Spinner from '../common/Spinner';


let test;



class bearbeitenNutzer extends Component {
  constructor(props) {
    super(props);
  
     this.state = {
        vorname: '',
        nachname: '',
        code: '',
        errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  

  componentDidMount() {
    this.props.getNutzer(this.props.match.params.id);

}

  componentWillReceiveProps(nextProps) {

    if (nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }

    const {nutz, loading} = this.props.nutzer;

    if(!loading){
      this.setState({
        vorname: loading || !nutz.vorname ? '': nutz.vorname,
        nachname: loading || !nutz.nachname ? '': nutz.nachname,
        code: loading || !nutz.code ? '': nutz.code
      })
    }

    
  }

  onSubmit(e) {
    e.preventDefault();
  
    const nutzerData = {
      vorname: this.state.vorname,
      nachname: this.state.nachname,
      code: this.state.code
    };

    this.props.updateNutzer(nutzerData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    

    //select options for categorys

    return (
      <div className="add-post">
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col my-5 fenster">
              <Link to="/" className="btn btn-light">
                <i className="fas fa-angle-left text-info" /> Zurück zum
                Dashboard
              </Link>
              <h1 className="display-4 text-center">Nutzer bearbeiten</h1>
              <p className="lead text-center">Bearbeite einen Nutzer.</p>
              <small className="d-block pb-3">* = Pflichtfelder</small>
              <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                  placeholder="* Vorname"
                  name="vorname"
                  value={this.state.vorname}
                  onChange={this.onChange}
                  error={errors.vorname}
                />

                <TextFieldGroup
                  placeholder="Nachname"
                  name="nachname"
                  value={this.state.nachname}
                  onChange={this.onChange}
                  error={errors.nachanme}
                />

                
                {test}
                <TextFieldGroup
                  placeholder="Code"
                  name="code"
                  value={this.state.code}
                  onChange={this.onChange}
                  error={errors.code}
                  info="Der Code dient zur Anmeldung in der App."
                />

                <input
                  type="submit"
                  value="Nutzer erstellen"
                  className="btn btn-info btn-block mt-4"
                />
               
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

bearbeitenNutzer.propTypes = {
  nutzer: PropTypes.object.isRequired,
  updateNutzer: PropTypes.func.isRequired,
  getNutzer: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nutzer: state.nutzer,
  errors: state.errors
});

export default connect(mapStateToProps, { updateNutzer, getNutzer })(withRouter(bearbeitenNutzer));
