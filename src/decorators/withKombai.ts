import type { DecoratorFunction } from "@storybook/addons";
import { useEffect, useMemo, useChannel } from "@storybook/addons";

import { EVENTS } from '../constants';
import { StoryNode } from "../types";


export const withKombai: DecoratorFunction = (storyFn, context) => {
    const meta = useMemo<StoryNode>(() => ({

        id: context.id,
        args: context.args,
        name: context.name,
        framework: context.parameters.framework,
        source: context.parameters.storySource?.source,
        component: {
            name: context.component?.displayName,
            argTypes: context.argTypes,
            defaultProps: context.component?.defaultProps,
        },
    }), [context])

    const emit = useChannel({});

    useEffect(() => {
        emit(EVENTS.STORY_META, meta);
    }, [meta, storyFn])

    return storyFn();
};