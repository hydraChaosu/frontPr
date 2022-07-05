import React from 'react';

class ErrorBoundary extends React.Component<{ children: React.ReactNode}, {hasError: boolean}> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error:any) {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}
