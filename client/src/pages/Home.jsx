import React, { Component } from 'react';
import '../App.css';
import { AuthContext } from '../contexts/AuthContext';
import PublicView from '../components/PublicView/';
import PrivateView from '../components/PrivateView';
import UserGraph from "../components/UserGraph";
import ActiveUserDisplay from "../components/ActiveUserDisplay";
import TopUser from "../components/TopUser";
import UserFavorites from "../components/UserFavorites";
import Wrapper from "../components/Wrapper";
import Badges from "../components/Badges";
import API from '../utils/api';
import Search from '../components/Search';
import { Redirect } from 'react-router-dom';
import UserSearch from '../components/UserSearch';

const backgroundStyle = {
  backgroundColor: '#E0DFE0'
}
class Home extends Component {

  render() {
    return (
      <div style={backgroundStyle}>
          <AuthContext.Consumer>{(context) => {
            const { authenticated, userProfile} = context 
            console.log("context: ", context)
            return (
              authenticated ? 
              <div>
              <div>
                <Wrapper />
                <div className="container">
                <Badges />
                <ActiveUserDisplay userProfile={userProfile} />
                <PrivateView />
                </div>
              </div>
              </div>
              : <PublicView />
            )
          }}
          </AuthContext.Consumer>
      </div>
    )
  }
}
export default Home;