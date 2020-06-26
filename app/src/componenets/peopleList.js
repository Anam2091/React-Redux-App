import React, {useEffect}from "react";
import { connect } from "react-redux";
import People from "./people";
import {getStar} from "../actions/actions"




const PeopleList = ({getStar,list}) => {
    useEffect(() => {
        // run action creator when the component mounts
        getStar();
      }, [getStar]);
    
  return <div>
    {
        list.map((person)=>(
            <People person={person}/>
        ))
    }
  </div>;
};
const mapStateToProps = state => {
    return {
      list: state.list,
      
    };
  };
export default connect(mapStateToProps, {getStar})(PeopleList);
