"use client";

import { format } from "date-fns";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import type { IEvent } from "@/modules/components/calendar/interfaces";

interface EventDropConfirmationDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	event: IEvent | null;
	newStartDate: Date | null;
	newEndDate: Date | null;
	onConfirm: () => void;
	onCancel: () => void;
}

export function EventDropConfirmationDialog({
	open,
	onOpenChange,
	event,
	newStartDate,
	newEndDate,
	onConfirm,
	onCancel,
}: EventDropConfirmationDialogProps) {
	if (!event || !newStartDate || !newEndDate) {
		return null;
	}

	const originalStart = new Date(event.startDate);

	const formatDateTime = (date: Date) => {
		return format(date, "MMM dd, yyyy 'at' h:mm a");
	};

	const handleConfirm = () => {
		onConfirm();
		onOpenChange(false);
	};

	const handleCancel = () => {
		onCancel();
		onOpenChange(false);
	};

	return (
		<AlertDialog open={open} onOpenChange={onOpenChange}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Confirm Event Move</AlertDialogTitle>
					<AlertDialogDescription>
						Are you sure you want to move <strong>{event.title}</strong> from{" "}
						<strong>{formatDateTime(originalStart)}</strong> to{" "}
						<strong>{formatDateTime(newStartDate)}</strong>?
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={handleConfirm}>
						Move Event
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
