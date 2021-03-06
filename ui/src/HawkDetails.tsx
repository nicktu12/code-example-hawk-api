import React, { Component } from "react";
import { Hawk } from "./HawkReference";

type HawkDetailsProps = {
  displayDetails: Boolean;
  hawkDetails: Hawk;
  handleChange: Function;
  saveHawk: Function;
  hawkId: number;
};

type HawkDetailsState = {};

export class HawkDetails extends Component<HawkDetailsProps, HawkDetailsState> {
  render() {
    return (
      <div className="hawk-details">
        <label htmlFor="name" className="name-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={this.props.hawkDetails.name}
          onChange={e => this.props.handleChange(e.target.value, "name")}
        />
        <label htmlFor="size" className="size-label">
          Size
        </label>
        <select
          id="size"
          onChange={e => this.props.handleChange(e.target.value, "size")}
          defaultValue={
            this.props.hawkDetails.size ? this.props.hawkDetails.size : ""
          }
        >
          <option value=""></option>
          <option value="SMALL">Small</option>
          <option value="MEDIUM">Medium</option>
          <option value="LARGE">Large</option>
        </select>
        <label htmlFor="gender" className="gender-label">
          Gender
        </label>
        <select
          id="gender"
          onChange={e => this.props.handleChange(e.target.value, "gender")}
          defaultValue={
            this.props.hawkDetails.gender ? this.props.hawkDetails.gender : ""
          }
        >
          <option value=""></option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
        <span className="length-label">Length</span>
        <label className="length-from">From</label>
        <input
          onChange={e =>
            this.props.handleChange(parseInt(e.target.value), "lengthBegin")
          }
          className="length-from-input"
          type="number"
          value={this.props.hawkDetails.lengthBegin}
        />
        <label className="length-to">To</label>
        <input
          onChange={e =>
            this.props.handleChange(parseInt(e.target.value), "lengthEnd")
          }
          className="length-to-input"
          type="number"
          value={this.props.hawkDetails.lengthEnd}
        />
        <span className="length-units">cm</span>
        <span className="wingspan-label">Wingspan</span>
        <label className="wingspan-from">From</label>
        <input
          onChange={e =>
            this.props.handleChange(parseInt(e.target.value), "wingspanBegin")
          }
          className="wingspan-from-input"
          type="number"
          value={this.props.hawkDetails.wingspanBegin}
        />
        <label className="wingspan-to">To</label>
        <input
          onChange={e =>
            this.props.handleChange(parseInt(e.target.value), "wingspanEnd")
          }
          className="wingspan-to-input"
          type="number"
          value={this.props.hawkDetails.wingspanEnd}
        />
        <span className="wingspan-units">cm</span>
        <span className="weight-label">Weight</span>
        <label className="weight-from">From</label>
        <input
          onChange={e =>
            this.props.handleChange(parseInt(e.target.value), "weightBegin")
          }
          className="weight-from-input"
          type="number"
          value={this.props.hawkDetails.weightBegin}
        />
        <label className="weight-to">To</label>
        <input
          onChange={e =>
            this.props.handleChange(parseInt(e.target.value), "weightEnd")
          }
          className="weight-to-input"
          type="number"
          value={this.props.hawkDetails.weightEnd}
        />
        <span className="weight-units">cm</span>
        <label htmlFor="url" className="url-label">
          Url
        </label>
        <input
          id="url"
          type="text"
          value={this.props.hawkDetails.pictureUrl}
          onChange={e => this.props.handleChange(e.target.value, "pictureUrl")}
        />
        <label className="color-description">
          Color description
          <textarea
            onChange={e =>
              this.props.handleChange(e.target.value, "colorDescription")
            }
            value={this.props.hawkDetails.colorDescription}
          ></textarea>
        </label>
        <label className="behavior-description">
          Behavior description
          <textarea
            onChange={e =>
              this.props.handleChange(e.target.value, "behaviorDescription")
            }
            value={this.props.hawkDetails.behaviorDescription}
          ></textarea>
        </label>
        <label className="habitat-description">
          Habitat description
          <textarea
            onChange={e =>
              this.props.handleChange(e.target.value, "habitatDescription")
            }
            value={this.props.hawkDetails.habitatDescription}
          ></textarea>
        </label>
        {!this.props.hawkDetails.id && (
          <button className="save-button" onClick={() => this.props.saveHawk()}>
            Save
          </button>
        )}
      </div>
    );
  }
}
