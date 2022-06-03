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

import { FormattedMessage, useIntl } from "react-intl";
import QRCode from "react-qr-code";
import { showNotification } from "@mantine/notifications";
import { useModals } from "@mantine/modals";
import { useClipboard } from "@mantine/hooks";
import { Box, createStyles, Group, SimpleGrid, Skeleton } from "@mantine/core";
import type { OpenConfirmModal } from "@mantine/modals/lib/context";
import { DetailItem } from "@atoms/DetailItem";
import { Button } from "@atoms/Buttons";
import { Anchor } from "@atoms/Typography";
import { DetailItemCard } from "@atoms/DetailItemCard";
import { LangKeys } from "@constants/lang";
import { useSetDownloadQRCode } from "@hooks/haveno/useSetDownloadQRCode";
import { Modals } from "@constants/modals";

interface AddressCardProps {
  label?: string;
  address: string;
  primary?: boolean;
  qrModalProps?: OpenConfirmModal;
}

const COPY_TEXT_TIMEOUT = 500;

export function AddressCard({
  label,
  address,
  primary = false,
  qrModalProps,
}: AddressCardProps) {
  const modals = useModals();
  const { classes } = useStyles();
  const { formatMessage } = useIntl();

  const { mutateAsync: downloadQRCode } = useSetDownloadQRCode();

  const clipboard = useClipboard({ timeout: COPY_TEXT_TIMEOUT });

  const handleCopyClick = () => {
    clipboard.copy(address);
  };
  const handleQRDownloadClick = (addressCode: string) => {
    downloadQRCode(addressCode).then(() => {
      showNotification({
        color: "green",
        message: formatMessage({
          id: LangKeys.AddressCardQRCodeSavedSuccessNotif,
          defaultMessage: "The QR code has been saved successfully.",
        }),
      });
      modals.closeModal(Modals.QRCodeAddress);
    });
  };
  const handleQRClick = () => {
    const modalId = modals.openModal({
      id: Modals.QRCodeAddress,
      children: (
        <AddressCardQRModalContent
          address={address}
          onQRDownloadClick={handleQRDownloadClick}
          onReturnClick={() => modals.closeModal(modalId)}
        />
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      size: "lg",
      withCloseButton: false,
      ...qrModalProps,
    });
  };

  return (
    <DetailItemCard label={label} primary={primary}>
      <Group noWrap className={classes.contentGroup}>
        <Box className={classes.address}>{address}</Box>

        <Group noWrap className={classes.addressBtns}>
          <Anchor onClick={handleCopyClick} underline>
            {!clipboard.copied ? (
              <FormattedMessage
                id={LangKeys.AddressCardCopyBtn}
                defaultMessage="Copy"
              />
            ) : (
              <FormattedMessage
                id={LangKeys.AddressCardCopiedBtn}
                defaultMessage="Copied"
              />
            )}
          </Anchor>

          <Anchor onClick={handleQRClick} underline>
            <FormattedMessage
              id={LangKeys.AddressCardQRBtn}
              defaultMessage="QR"
            />
          </Anchor>
        </Group>
      </Group>
    </DetailItemCard>
  );
}

type AddressCardSkeletonProps = Pick<AddressCardProps, "label" | "primary">;

export function AddressCardSkeleton({
  label,
  primary,
}: AddressCardSkeletonProps) {
  const { classes } = useStyles();

  return (
    <DetailItemCard label={label} primary={primary}>
      <Box className={classes.address}>
        <Skeleton
          width="80%"
          height={8}
          mt="xs"
          sx={(theme) => ({
            "&:before": {
              backgroundColor: primary
                ? theme.colors.gray[1]
                : theme.colors.gray[0],
            },
            "&:after": {
              backgroundColor: primary
                ? theme.colors.gray[4]
                : theme.colors.gray[3],
            },
          })}
        />
      </Box>
    </DetailItemCard>
  );
}

interface AddressCardQRModalContentProps {
  address: string;
  onQRDownloadClick?: (address: string) => void;
  onReturnClick?: () => void;
}

function AddressCardQRModalContent({
  address,
  onQRDownloadClick,
  onReturnClick,
}: AddressCardQRModalContentProps) {
  const { classes } = useStyles();
  const { formatMessage } = useIntl();

  const handleQRDownloadClick = () => {
    onQRDownloadClick && onQRDownloadClick(address);
  };
  return (
    <Box className={classes.qrModalRoot}>
      <DetailItem
        classNames={{
          content: classes.qrModalAddress,
          label: classes.qrModalAddressLabel,
        }}
        label={formatMessage({
          id: LangKeys.MyWalletQRModalPrimaryAddress,
          defaultMessage: "Primary Address",
        })}
      >
        {address}
      </DetailItem>

      <Box className={classes.qrRoot}>
        <QRCode value={address} size={370} />
      </Box>

      <SimpleGrid cols={2} mt="xl">
        <Button flavor="neutral" onClick={onReturnClick}>
          <FormattedMessage
            id={LangKeys.MyWalletQRModalReturnBtn}
            defaultMessage="Return"
          />
        </Button>

        <Button onClick={handleQRDownloadClick}>
          <FormattedMessage
            id={LangKeys.MyWalletQRModalDownloadQRBtn}
            defaultMessage="Download QR"
          />
        </Button>
      </SimpleGrid>
    </Box>
  );
}

const useStyles = createStyles((theme) => ({
  contentGroup: {
    minWidth: "100%",
  },
  address: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "100%",
  },
  addressBtns: {
    marginLeft: "auto",
  },
  qrModalRoot: {
    padding: "1.5rem",
  },
  qrRoot: {
    marginTop: theme.spacing.xl * 1.5,
    marginBottom: theme.spacing.xl * 1.5,
    textAlign: "center",
  },
  qrModalAddress: {
    fontSize: theme.fontSizes.lg,
  },
  qrModalAddressLabel: {
    fontSize: theme.fontSizes.xs,
  },
}));
