import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, GridColumn } from "semantic-ui-react";
import LoadingComponent from "../../app/layout/Loadingcomponent";
import { useStore } from "../../app/stores/store";
import ProfileContent from "./ProfileContent";
import ProfileHeader from "./ProfileHeader";

export default observer(function ProfilePage() {
    const { username } = useParams<{ username: string }>();
    const { profileStore } = useStore();
    const { loadingprofile, loadProfile, profile } = profileStore;

    useEffect(() => {
        loadProfile(username);
    }, [loadProfile, username]);

    if (loadingprofile) return <LoadingComponent content='Loding profile...' />

    return (
        <Grid>
            <GridColumn width={16}>
                {profile &&
                    <ProfileHeader profile={profile} />}
                <ProfileContent />
            </GridColumn>
        </Grid>
    )
})