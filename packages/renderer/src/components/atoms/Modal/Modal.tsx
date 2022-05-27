// =============================================================================
//  Copyright 2022 Haveno
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// =============================================================================

import type { ModalProps as MModalProps } from "@mantine/core";
import { createStyles, Modal as MModal } from "@mantine/core";
import type { ModalsProviderProps } from "@mantine/modals";
import { ModalsProvider as MModalsProvider } from "@mantine/modals";

const commonModalProps = {
  overlayOpacity: 0.25,
  padding: 25,
};

export function Modal(props: MModalProps) {
  const style = useStyles();

  return <MModal classNames={style.classes} {...commonModalProps} {...props} />;
}

export function ModalsProvider({ ...props }: ModalsProviderProps) {
  const style = useStyles();

  return (
    <MModalsProvider
      modalProps={{
        classNames: style.classes,
        ...commonModalProps,
      }}
      {...props}
    />
  );
}

const useStyles = createStyles((theme) => ({
  modal: {
    borderRadius: theme.radius.xl / 1.6,
  },
  title: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 600,
  },
}));
