import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
//import SelectListGroup from "../common/SelectListGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createNutzer } from "../../actions/nutzerActions";

let test;
class addNutzer extends Component {
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
    //this.handleEditorChange = this.handleEditorChange.bind(this);
    // this.onEditorStateChange = this.onEditorStateChange.bind(this);
    // this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
  
    const nutzerData = {
      vorname: this.state.vorname,
      nachname: this.state.nachname,
      code: this.state.code
    };

    this.props.createNutzer(nutzerData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    //const { errors } = this.state;

  
    
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
              <h1 className="display-4 text-center">Nutzer erstellen</h1>
              <p className="lead text-center">Erstelle einen neuen Nutzer.</p>
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

                

                {/*<TextAreaFieldGroup
                  placeholder="* Hier kannst Du deinen Beitrag erstellen."
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                />
                <Editor
                  editorState={editorState}
                  placeholder="Hier kannst Du deinen Beitrag erstellen."
                  localization={{
                    locale: 'de',
                  }}
                  toolbar={{
                    image: { alignmentEnable: true }
                  }}
                  onEditorStateChange={this.onEditorStateChange}

                /> */}

                <input
                  type="submit"
                  value="Nutzer erstellen"
                  className="btn btn-info btn-block mt-4"
                />
                {/* <input type="copy" value="Als Entwurf speichern" className="btn btn-secondary btn-block mt-4" /> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

addNutzer.propTypes = {
  nutzer: PropTypes.object.isRequired,
  createNutzer: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nutzer: state.nutzer,
  errors: state.errors
});

export default connect(mapStateToProps, { createNutzer })(withRouter(addNutzer));
