/**
* Sample React Native App
* https: //github.com/facebook/react-native
*
* @format
* @flow
*/
/* jshint ignore:start */
import React, {PureComponent} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  Button,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';
import baseStyles from '@lib/base';
import {withNavigation, HeaderBackButton} from 'react-navigation';
import {connect} from 'react-redux';
import {get_details} from '@redux/StartUp/operations';
const customData = require ('@lib/Data.json');
import _ from 'lodash';
import Spinner from '@components/SpinnerComponent/Spinner/Spinner';

class FlatlistComponent extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      isLoading: true,
      text: '',
      service: 0, //inifite scroll
      page: 1,
      dataItems: [],
    };
    this.arrayholder = [];
  }
  componentDidMount () {
    console.log ('customData', customData);
    this.getdetails ();
  }
  getdetails () {
    // _this.setState ({service: 0}, function () {});
    let _this = this;
    this.props.get_details ().then (function () {
      if (_this.props.getuserDetails && _this.props.getuserDetails.length > 0) {
        _this.setState ({service: 1}, function () {});
        let arrayItem = _this.props.getuserDetails;
        _this.arrayholder.push (arrayItem);
        _this.setState (
          {
            dataItems: _.flatten (_this.arrayholder),
            refreshing: false,
          },
          function () {}
        );
      }
    });
  }

  SearchFilterFunction (text) {
    //passing the inserted text in textinput
    const newData = this.state.dataItems.filter (function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title
        ? item.title.toUpperCase ()
        : ''.toUpperCase ();
      const textData = text.toUpperCase ();
      return itemData.indexOf (textData) > -1;
    });
    this.setState (
      {
        //setting the filtered newData on datasource
        //After setting the data it will automatically re-render the view
        dataItems: newData,
        text: text,
      },
      function () {
        console.log ('dataItems', this.state.dataItems);
        console.log ('text', this.state.text);
      }
    );
  }

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          borderBottomColor: colors.black,
          borderBottomWidth: wp ('0.4%'),
        }}
      />
    );
  };

  _handleLoadMore = () => {
    if (this.state.service === 1) {
      this.setState (
        (prevState, nextProps) => ({
          page: prevState.page + 1,
        }),
        () => {
          this.getdetails ();
        }
      );
    }
  };

  // _handleRefresh = () => {
  //   this.setState (
  //     {
  //       page: 1,
  //       refreshing: true,
  //     },
  //     () => {
  //       this.getdetails ();
  //     }
  //   );
  // };

  renderuserList = item => {
    return (
      <View style={{paddingBottom: hp ('5%')}}>
        <View style={styles.imgView}>

          <TouchableOpacity>
            <Image
              source={{uri: 'https://picsum.photos/200'}}
              style={styles.img}
            />

          </TouchableOpacity>

          <Text style={styles.textStyle}>{item.item.title}</Text>

        </View>
      </View>
    );
  };

  _renderFooter = () => {
    return (
      <View
        style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        {this.props.isLoading && this.props.getuserDetails.length > 0
          ? <Spinner loading={this.props.isLoading} />
          : null}
      </View>
    );
  };

  render () {
    return (
      <View style={baseStyles.content}>
        <Spinner loading={this.props.isLoading} />
        <View style={styles.viewStyle}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={text => this.SearchFilterFunction (text)}
            value={this.state.text}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
          <FlatList
            // data={customData}
            data={this.state.dataItems}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            renderItem={this.renderuserList}
            enableEmptySections={true}
            style={{marginTop: 10}}
            keyExtractor={(item, index) => index.toString ()}
            initialNumToRender={this.props.getuserDetails.length}
            ListFooterComponent={this._renderFooter}
            onEndReached={this._handleLoadMore}
            onEndReachedThreshold={0.5}
          />
        </View>

      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log ('state', state);
  return {
    getuserDetails: state.startUp.userDetails ? state.startUp.userDetails : '',
    error: state.startUp.error,
    isLoading: state.startUp.loading,
  };
};
const mapDispatchToProps = {
  get_details,
};
export default connect (mapStateToProps, mapDispatchToProps) (
  FlatlistComponent
);
