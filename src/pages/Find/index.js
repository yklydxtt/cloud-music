import React from 'react'
import {connect} from 'react-redux'

const Find =(props)=>{
    return (
        <div>FindMusic</div>
    )
}
const mapStateToProps = state => ({
	name: state.find.name
});
export default connect(mapStateToProps,null)(Find);