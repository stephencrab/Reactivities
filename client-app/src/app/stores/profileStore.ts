import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Profile } from "../models/profile";

export default class ProfileStore {
    profile: Profile | null = null;
    loadingprofile = false;

    constructor() {
        makeAutoObservable(this);
    }

    loadProfile = async (username: string) => {
        this.loadingprofile = true;
        try {
            const profile = await agent.Profiles.get(username);
            runInAction(() => {
                this.profile = profile;
                this.loadingprofile = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => this.loadingprofile = false);
        }
    }
}