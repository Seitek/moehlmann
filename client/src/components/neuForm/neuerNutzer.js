import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createNutzer } from "../../actions/nutzerActions";

let test;
class addPost extends Component {
  constructor(props) {
    super(props);

    const html = "Kein Inhalt";
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState
      };
    }

    this.state = {
      title: "",
      description: "",
      text: "",
      tags: "",
      category: "",
      group: "",
      // likes: [],
      //comments: {},
      files: "",
      role: 1,
      post_deleted: false,
      errors: {},
      schulfach: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
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
    const { profile } = this.props.profile;

    const postData = {
      title: this.state.title,
      description: this.state.description,
      // text: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
      text: this.state.text,
      tags: this.state.tags,
      category: this.state.category,
      role: this.state.role,
      group: profile.group
    };

    this.props.createPost(postData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    const { errors } = this.state;

    const options2 = [
      { label: "Schulfach", value: 0 },
      { label: "Deutsch", value: "Deutsch" },
      { label: "Mathematik", value: "Mathematik" },
      { label: "Sachunterricht", value: "Sachunterricht" },
      { label: "Geographie / Erdkunde", value: "Geographie / Erdkunde" },
      { label: "Religion", value: "Religion" },
      { label: "Englisch", value: "Englisch" },
      { label: "Französisch", value: "Französisch" },
      { label: "Spanisch", value: "Spanisch" },
      { label: "Latein", value: "Latein" },
      { label: "Niederländisch", value: "Niederländisch" },
      { label: "Plattdeutsch", value: "Plattdeutsch" },
      { label: "Saterfriesisch", value: "Saterfriesisch" }
    ];

    if (e.target.value === "Schulfach") {
      test = (
        <SelectListGroup
          placeholder="Schulfach"
          name="schulfach"
          value={this.state.schulfach}
          options={options2}
          onChange={this.onChange}
          error={errors.category}
        />
      );
    }
  }

  render() {
    const { errors } = this.state;

    //select options for categorys
    const options = [
      { label: "Kategorie", value: 0 },
      { label: "Geschichte", value: "Geschichte" },
      { label: "Kultur", value: "Kultur" },
      { label: "Musik", value: "Musik" },
      { label: "Politik/Wirtschaft", value: "Politik/Wirtschaft" },
      { label: "Sport", value: "Sport" },
      { label: "Schulfach", value: "Schulfach" }
    ];

    return (
      <div className="add-post">
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col my-5 fenster">
              <Link to="/dashboard" className="btn btn-light">
                <i className="fas fa-angle-left text-info" /> Zurück zum
                Dashboard
              </Link>
              <h1 className="display-4 text-center">Beitrag erstellen</h1>
              <p className="lead text-center">Erstelle einen neuen Beitrag.</p>
              <small className="d-block pb-3">* = Pflichtfelder</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Titel"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                />

                <TextFieldGroup
                  placeholder="Beschreibung"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                />

                <SelectListGroup
                  placeholder="Kategorie"
                  name="category"
                  value={this.state.category}
                  options={options}
                  onChange={this.onChange}
                  error={errors.category}
                />
                {test}
                <TextFieldGroup
                  placeholder="Stichpunkte"
                  name="tags"
                  value={this.state.tags}
                  onChange={this.onChange}
                  error={errors.tags}
                  info="Stichpunkte werden mit einem Komma getrennt."
                />

                <h4>Dein Beitrag</h4>

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
                  value="Veröffentlichen"
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

addPost.propTypes = {
  // post: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  errors: state.errors,
  profile: state.profile
});

export default connect(mapStateToProps, { createPost })(withRouter(addPost));
