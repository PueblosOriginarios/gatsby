import React from 'react';
import { Helmet } from 'react-helmet';
import { Theme, useGlobalState } from '../../context';
import { SplashScreen } from '../SplashScreen';
import { Footer } from '../Footer/index';
import { Header } from '../Header/index';
import { CookieBar } from '../CookieBar';
import * as classes from './style.module.css';
import '@fontsource/gothic-a1/400.css';
import "@fontsource/gothic-a1/700.css";
import '../../globalStyles/global.scss';
import '../../globalStyles/theme.scss';

interface LayoutProps {
    children: React.ReactElement;
    useSplashScreenAnimation: boolean;
    useCookieBar: boolean;
}

export function Layout(props: LayoutProps): React.ReactElement {
    const { globalState } = useGlobalState();
    const showSplashScreen = props.useSplashScreenAnimation && !globalState.splashScreenDone;
    const darkModeEnabled = globalState.theme === Theme.Dark;

    const splashScreenView = (
        <>
            <Helmet bodyAttributes={{ 'data-theme': Theme.Light }} />
            <SplashScreen />
        </>
    );

    const layoutView = (
        <>
            <Helmet
                bodyAttributes={{
                    'data-theme': darkModeEnabled ? Theme.Dark : Theme.Light,
                }}
            />
            <div className={classes.Layout}>
                <Header />
                <main className={classes.main}>{props.children}</main>
                {props.useCookieBar && <CookieBar />}
                <Footer />
            </div>
        </>
    );

    return showSplashScreen ? splashScreenView : layoutView;
}
