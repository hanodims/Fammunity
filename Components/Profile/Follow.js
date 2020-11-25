import React, { useState } from "react";

import { Button, Text, View } from "native-base";
import styles from "../Post/styles";

// Redux
import { connect } from "react-redux";
import { followProfile } from "../../redux/actions";

const Follow = ({ username, followProfile, owner, profile }) => {
  const [followed, setFollowed] = useState(profile.followed);
  const [following, setFollowing] = useState(profile.following.length);
  const [followers, setFollowers] = useState(profile.followers.length);

  function handelFollow() {
    followProfile({ profile_id: profile.id });
    if (followed) {
      setFollowed(false);
      setFollowers(followers - 1);
    } else {
      setFollowed(true);
      setFollowers(followers + 1);
    }
  }

  return (
    <View style={{ alignContent: "center", alignItems: "center" }}>
      <View style={{ padding: 10 }}>
        <Text>{following} Following</Text>
        <Text>{followers} Followers</Text>
      </View>
      <View style={{ padding: 20 }}>
        {username != owner && (
          <Button bordered dark onPress={handelFollow}>
            {followed ? <Text>Unfollow</Text> : <Text>Follow</Text>}
          </Button>
        )}
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({
  username: state.profileReducer.name.username,
});
const mapDispatchToProps = {
  followProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Follow);
