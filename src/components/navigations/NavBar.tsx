/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
	useState,
	useCallback,
	useRef,
	PropsWithChildren,
	forwardRef,
	useMemo,
	useEffect,
} from "react";
import clsx from "clsx";
import {
	ChevronLeftIcon,
	LinkExternalIcon,
	MarkGithubIcon,
	SearchIcon,
	XIcon,
} from "@primer/octicons-react";
import { default as NextLink } from "next/link";

import { Button, FormControl, Text, TextInput } from "@primer/react-brand";
import { NavigationVisbilityObserver } from "./NavigationVisibilityObserver";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { useFocusTrap } from "../hooks/useFocusTrap";
import { useKeyboardEscape } from "../hooks/useKeyboardEscape";
import { useWindowSize } from "../hooks/useWindowSize";

/**
 * Design tokens
 */
import "@primer/brand-primitives/lib/design-tokens/css/tokens/functional/components/subdomain-nav-bar/colors-with-modes.css";

/** * Main Stylesheet (as a CSS Module) */
import styles from "./NavBar.module.css";
import { useId } from "react";

export type NavBarProps = {
	/**
	 * Valid child elements are `NavBar.Link`, `NavBar.PrimaryAction`,
	 * `NavBar.SecondaryAction` and `NavBar.Search`
	 */
	children?:
		| React.ReactNode
		| React.ReactElement<LinkProps>
		| React.ReactElement<SearchProps>
		| React.ReactElement<CTAActionProps>;
	/**
	 * Forward a custom HTML class attribute
	 */
	className?: string;
	/**
	 * Fixes the navigation bar to the top of the viewport. Defaults to `true`.
	 */
	fixed?: boolean;
	/**
	 * Fill the maximum width of the parent container. Defaults to `false`.
	 */
	fullWidth?: boolean;
	/**
	 * The title or name of the subdomain. Appears adjacent to the logo and is required for communicating content to assisitive technologies.
	 */
	title: string;
	/**
	 * The URL for the site. Typically used to link the titleText prop value to the site root.
	 */
	titleHref?: string;
	/**
	 * Optionally change the URL of the logo
	 */
	logoHref?: string;
};
const testIds = {
	root: "NavBar",
	get innerContainer() {
		return `${this.root}-inner-container`;
	},
	get menuButton() {
		return `${this.root}-menuButton`;
	},
	get menuLinks() {
		return `${this.root}-menuLinks`;
	},
	get liveRegion() {
		return `${this.root}-search-live-region`;
	},
};

function Root({
	children,
	className,
	fixed = true,
	fullWidth = false,
	logoHref = "https://github.com",
	title,
	titleHref = "/",
	...rest
}: NavBarProps) {
	const [menuHidden, setMenuHidden] = useState(true);
	const [searchVisible, setSearchVisible] = useState(false);
	const { isSmall, isMedium } = useWindowSize();
	const [startOfContentButtonFocused, setStartOfContentButtonFocused] =
		useState(false);
	const mainElRef = useRef<HTMLElement | null>(null);
	const startOfContentID = useId();

	const handleMobileMenuClick = () => setMenuHidden(!menuHidden);
	const handleSearchVisibility = () => setSearchVisible(!searchVisible);
	const focusTrapRef = useRef<HTMLDivElement | null>(null);

	const [hasScrolled, setHasScrolled] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setHasScrolled(true);
		} else {
			setHasScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	useEffect(() => {
		const mainEl = document.querySelector("main");
		if (mainEl) {
			mainEl.id = mainEl.id || startOfContentID;
			mainElRef.current = mainEl;
		}
	}, [startOfContentID]);

	useFocusTrap({
		containerRef: focusTrapRef,
		restoreFocusOnCleanUp: true,
		disabled: menuHidden,
	});
	useKeyboardEscape(() => {
		setMenuHidden(true);
	});

	useEffect(() => {
		if (isMedium) {
			setMenuHidden(true);
		}
	}, [isMedium, menuHidden]);

	useEffect(() => {
		const newOverflowState = menuHidden ? "auto" : "hidden";
		document.body.style.overflow = newOverflowState;
	}, [menuHidden]);

	const setStartOfContentButtonFocusedTrue = useCallback(
		() => setStartOfContentButtonFocused(true),
		[]
	);
	const setStartOfContentButtonFocusedFalse = useCallback(
		() => setStartOfContentButtonFocused(false),
		[]
	);

	const hasLinks =
		useMemo(
			() =>
				React.Children.toArray(children).filter(
					(child) =>
						React.isValidElement(child) &&
						typeof child.type !== "string" &&
						child.type === Link
				),
			// eslint-disable-next-line react-hooks/exhaustive-deps
			[]
		).length > 0;

	const menuItems = useMemo(
		() =>
			React.Children.toArray(children)
				.map((child, index) => {
					if (React.isValidElement(child) && typeof child.type !== "string") {
						if (child.type === Link) {
							return React.cloneElement(child as React.ReactElement, {
								"data-navitemid": child.props.children,
								href: child.props.href,
								children: child.props.children,
								style: {
									[`--animation-order`]: index,
								},
							});
						}
						return null;
					}
				})
				.filter(Boolean),
		[children]
	);

	const hasAllActions: boolean = useMemo(() => {
		const primaryAction = React.Children.toArray(children).find(
			(child) => React.isValidElement(child) && child.type === PrimaryAction
		);
		const secondaryAction = React.Children.toArray(children).find(
			(child) => React.isValidElement(child) && child.type === SecondaryAction
		);
		return !!primaryAction && !!secondaryAction;
	}, [children]);

	return (
		<>
			<div
				className={clsx(
					styles["NavBar-outer-container"],
					fixed && styles["NavBar-outer-container--fixed"],
					hasAllActions && styles["NavBar-outer-container--has-actions"]
				)}
			>
				<Button
					as="a"
					href={`#${mainElRef.current?.id || startOfContentID}`}
					variant="primary"
					className={clsx(
						styles["NavBar-skip-to-content"],
						!startOfContentButtonFocused && "visually-hidden"
					)}
					onFocus={setStartOfContentButtonFocusedTrue}
					onBlur={setStartOfContentButtonFocusedFalse}
				>
					Skip to content
				</Button>
				<header
					className={clsx(
						styles["NavBar"],
						styles["NavDesktop"],
						hasScrolled && styles["NavDesktop--hasScrolled"],
						className
					)}
					data-testid={testIds.root}
					{...rest}
				>
					<div
						ref={focusTrapRef}
						className={clsx(
							styles["NavBar-inner-container"],
							searchVisible && styles["NavBar-inner-container--search-open"],
							!fullWidth && styles["NavBar-inner-container--centered"]
						)}
						data-testid={testIds.innerContainer}
					>
						<nav aria-label="Header logo and title">
							<ol className={styles["NavBar-title-area"]}>
								{/* <li>
									<a
										href={logoHref}
										aria-label="Github Home"
										className={styles["NavBar-logo-mark"]}
									>
										<span className={clsx(styles["NavBar-back-arrow"])}>
											<ChevronLeftIcon fill="currentColor" size={24} />
										</span>
										<MarkGithubIcon fill="currentColor" size={24} />
									</a>
								</li> */}
								{title && isSmall && (
									<>
										{/* <li
											role="separator"
											className={styles["NavBar-title-separator"]}
											aria-hidden
										>
											/
										</li> */}
										<li>
											<a
												href={titleHref}
												aria-label={`${title} home`}
												className={clsx(styles["NavBar-title"])}
											>
												<Text size="400" weight="semibold">
													{title}
												</Text>
											</a>
										</li>
									</>
								)}
							</ol>
						</nav>
						{hasLinks && (
							<nav
								aria-label={title}
								className={clsx(
									styles["NavBar-primary-nav"],
									styles["menu-navigation"]
								)}
								data-testid={testIds.menuLinks}
							>
								<NavigationVisbilityObserver
									className={clsx(styles["NavBar-primary-nav-list--invisible"])}
								>
									{menuItems}
								</NavigationVisbilityObserver>
							</nav>
						)}

						<div className={clsx(styles["NavBar-secondary-nav"])}>
							{React.Children.toArray(children)
								.map((child) => {
									if (
										React.isValidElement(child) &&
										typeof child.type !== "string"
									) {
										if (child.type === Search) {
											return React.cloneElement(child as React.ReactElement, {
												active: searchVisible,
												handlerFn: handleSearchVisibility,
												title,
											});
										}
										return null;
									}
								})
								.filter(Boolean)}

							{hasLinks && (
								<button
									aria-expanded={!menuHidden}
									aria-label="Menu"
									aria-controls="menu-navigation"
									aria-haspopup="true"
									className={clsx(
										styles["NavBar-menu-button"],
										styles["NavBar-mobile-menu-button"],
										!menuHidden && styles["NavBar-menu-button--close"]
									)}
									data-testid={testIds.menuButton}
									onClick={handleMobileMenuClick}
								>
									<div className={clsx(styles["NavBar-menu-button-bar"])}></div>
									<div className={clsx(styles["NavBar-menu-button-bar"])}></div>
									<div className={clsx(styles["NavBar-menu-button-bar"])}></div>
								</button>
							)}

							{isMedium && (
								<div
									className={clsx(
										styles["NavBar-button-area"],
										styles["NavBar-button-area--visible"]
									)}
								>
									<div className={styles["NavBar-button-area-inner"]}>
										{React.Children.toArray(children)
											.map((child) => {
												if (
													React.isValidElement(child) &&
													typeof child.type !== "string"
												) {
													if (child.type === PrimaryAction) {
														return child;
													}
													return null;
												}
											})
											.filter(Boolean)}

										{React.Children.toArray(children)
											.map((child) => {
												if (
													React.isValidElement(child) &&
													typeof child.type !== "string"
												) {
													if (child.type === SecondaryAction) {
														return child;
													}
													return null;
												}
											})
											.filter(Boolean)}
									</div>
								</div>
							)}

							{!isMedium && (
								<div
									className={clsx(
										styles["NavBar-menu-wrapper"],
										menuHidden && styles["NavBar-menu-wrapper--close"]
									)}
								>
									<div>
										{title && titleHref && (
											<Text as="p">
												<a
													href={titleHref}
													aria-label={`${title} home`}
													className={clsx(
														styles["NavBar-link"],
														styles["NavBar-link--title"]
													)}
												>
													{title}
												</a>
											</Text>
										)}
										{hasLinks && !menuHidden && (
											<NavigationVisbilityObserver
												// showOnlyOnNarrow
												className={clsx(
													styles["NavBar-primary-nav-list--visible"]
												)}
											>
												{menuItems}
											</NavigationVisbilityObserver>
										)}
									</div>
									<div
										className={clsx(
											styles["NavBar-button-area"],
											styles["NavBar-button-area--visible"]
										)}
									>
										<div className={styles["NavBar-button-area-inner"]}>
											{React.Children.toArray(children)
												.map((child) => {
													if (
														React.isValidElement(child) &&
														typeof child.type !== "string"
													) {
														if (child.type === PrimaryAction) {
															return child;
														}
														return null;
													}
												})
												.filter(Boolean)}

											{React.Children.toArray(children)
												.map((child) => {
													if (
														React.isValidElement(child) &&
														typeof child.type !== "string"
													) {
														if (child.type === SecondaryAction) {
															return child;
														}
														return null;
													}
												})
												.filter(Boolean)}
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</header>
			</div>
			{!mainElRef.current && <div id={`${startOfContentID}`} tabIndex={-1} />}
		</>
	);
}

type LinkProps = {
	href: string;
	isExternal?: boolean;
} & React.DetailedHTMLProps<
	React.LiHTMLAttributes<HTMLLIElement>,
	HTMLLIElement
>;

function Link({
	href,
	className,
	children,
	isExternal,
	...rest
}: PropsWithChildren<LinkProps>) {
	return (
		<li
			className={clsx(styles["NavBar-primary-nav-list-item"], className)}
			{...rest}
		>
			<NextLink href={href} className={styles["NavBar-link"]}>
				<span className={styles["NavBar-link-text"]}>{children}</span>
				{isExternal && (
					<LinkExternalIcon size={16} aria-label="External link" />
				)}
			</NextLink>
		</li>
	);
}

export type NavBarSearchResultProps = {
	title: string;
	description: string;
	url: string;
	date: string;
	category?: string;
};

type SearchProps = {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	ref: React.RefObject<HTMLInputElement>;
	active?: boolean;
	title?: string;
	handlerFn?: (event: MouseEvent | TouchEvent | FocusEvent) => void;
	autoComplete?: boolean;
	searchResults?: NavBarSearchResultProps[];
	searchTerm?: string;
};

const _SearchInternal = (
	{
		active,
		title,
		searchResults,
		searchTerm,
		handlerFn,
		onSubmit,
		onChange,
	}: SearchProps,
	ref: React.LegacyRef<unknown> | undefined
) => {
	const dialogRef = useRef<HTMLDivElement | null>(null);

	useFocusTrap({
		containerRef: dialogRef,
		restoreFocusOnCleanUp: true,
		disabled: !active,
	});
	useOnClickOutside(dialogRef, handlerFn);

	const [activeDescendant, setActiveDescendant] = useState<number>(-1);
	const [listboxActive, setListboxActive] = useState<boolean>();
	const [liveRegion, setLiveRegion] = useState<boolean>(false);

	const handleClose = useCallback(
		(event: MouseEvent | TouchEvent | FocusEvent | null = null) => {
			if (handlerFn && event) handlerFn(event);
			setActiveDescendant(-1);
		},
		[handlerFn]
	);

	useOnClickOutside(dialogRef, handleClose);
	useKeyboardEscape(() => {
		// Close the dialog if combobox is already collapsed
		if (!listboxActive && active) {
			handleClose();
			return false;
		}

		setListboxActive(false);
		setActiveDescendant(-1);
	});

	const handleAriaFocus = useCallback(
		(event: any) => {
			const supportedKeys = ["ArrowDown", "ArrowUp", "Escape", "Enter"];
			const currentCount = activeDescendant;
			const searchResultsLength = searchResults ? searchResults.length : 0;
			const dialog = dialogRef.current;
			let count;

			// Prevent any other keys outside of supported from being prevented.
			// Only prevent "Enter" if activeDescendant is greater than -1.
			if (
				!supportedKeys.includes(event.key) ||
				(event.key === "Enter" && activeDescendant === -1) ||
				!dialog
			) {
				return false;
			}

			event.preventDefault();

			if (event.key === "ArrowDown") {
				// If count reaches last search result item, reset to -1
				count = currentCount < searchResultsLength - 1 ? currentCount + 1 : -1;
				setActiveDescendant(count);
			} else if (event.key === "ArrowUp") {
				// Reset to last search result item if
				count =
					currentCount === -1 ? searchResultsLength - 1 : currentCount - 1;
				setActiveDescendant(count);
			}

			if (["ArrowDown", "ArrowUp"].includes(event.key)) {
				dialog
					.querySelector(`#navbar-search-result-${count}`)
					?.scrollIntoView();
			}

			if (event.key === "Enter") {
				const link = dialog.querySelector(
					`#navbar-search-result-${activeDescendant} a`
				) as HTMLAnchorElement;
				link.click();
			}
		},
		[searchResults, activeDescendant]
	);

	const searchLiveRegion = useCallback(() => {
		// Adding a non-breaking space and then removing it will force screen readers to announce the text,
		// as it thinks that there was a change within the live region.
		setLiveRegion(true);

		setTimeout(() => {
			if (active) setLiveRegion(false);
		}, 200);
	}, [active]);

	useEffect(() => {
		// We want to set "listboxActive" when search results are present,
		// or the user pressed "Escape". We watch for "searchTerm", as we -
		// want the listbox to become active if they pressed "Escape", and -
		// adjusted their existing value.
		const search = searchResults && searchResults.length ? true : false;
		setListboxActive(search);
		searchLiveRegion();
	}, [searchResults, searchTerm, searchLiveRegion]);

	return (
		<>
			<div className={clsx(styles["NavBar-search-trigger"])}>
				<button
					aria-label="Toggle search bar"
					className={styles["NavBar-search-button"]}
					onClick={handlerFn as (event: any) => void}
					data-testid="toggle-search"
				>
					<SearchIcon aria-label="Search icon" />
				</button>
			</div>
			{active && (
				<div
					ref={dialogRef}
					role="dialog"
					aria-label={`Search ${title}`}
					aria-modal="true"
					tabIndex={-1}
					className={clsx(styles["NavBar-search-dialog"])}
				>
					<div className={clsx(styles["NavBar-search-dialog-control-area"])}>
						<form
							className={clsx(styles["NavBar-search-form"])}
							onSubmit={onSubmit}
							role="search"
						>
							<FormControl fullWidth size="medium">
								<FormControl.Label visuallyHidden>Search</FormControl.Label>
								<TextInput
									ref={ref}
									className={clsx(styles["NavBar-search-text-input"])}
									name="search"
									role="combobox"
									aria-expanded={listboxActive}
									aria-controls="listbox-search-results"
									placeholder={`Search ${title}`}
									onChange={onChange}
									defaultValue={searchTerm}
									invisible
									leadingVisual={<SearchIcon size={16} />}
									aria-activedescendant={
										activeDescendant === -1
											? undefined
											: `navbar-search-result-${activeDescendant}`
									}
									onKeyDown={handleAriaFocus}
								/>
							</FormControl>
						</form>
						<button
							aria-label="Close"
							className={clsx(
								styles["NavBar-menu-button"],
								styles["NavBar-menu-button--close"]
							)}
							onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
								handleClose(event as unknown as MouseEvent)
							}
						>
							<XIcon size={24} />
						</button>
					</div>

					<div id="listbox-search-results">
						{listboxActive && (
							<div className={clsx(styles["NavBar-search-results-container"])}>
								<Text
									id="navbar-search-results-heading"
									className={styles["NavBar-search-results-heading"]}
								>
									Results for &ldquo;{searchTerm}&rdquo;
								</Text>
								<ul
									role="listbox"
									tabIndex={0}
									aria-labelledby="navbar-search-results-heading"
									className={clsx(styles["NavBar-search-results"])}
								>
									{searchResults?.map((result, index) => (
										<li
											key={`${result.title}-${index}`}
											id={`navbar-search-result-${index}`}
											className={styles["NavBar-search-result-item"]}
											role="option"
											aria-selected={index === activeDescendant}
										>
											<div
												className={
													styles["NavBar-search-result-item-container"]
												}
											>
												<a href={result.url}>{result.title}</a>
											</div>

											<Text
												as="p"
												size="200"
												id={`navbar-search-result-item-desc${index}`}
												className={styles["NavBar-search-result-item-desc"]}
											>
												{result.description}
											</Text>
											<div>
												<Text
													size="100"
													className={styles["NavBar-search-result-item-desc"]}
												>
													{result.date}
												</Text>
												{result.category && (
													<>
														<Text
															size="100"
															className={
																styles["NavBar-search-result-item-desc"]
															}
														>
															{" "}
															•{" "}
														</Text>
														<Text
															size="100"
															className={
																styles["NavBar-search-result-item-desc"]
															}
														>
															{result.category}
														</Text>
													</>
												)}
											</div>
										</li>
									))}
								</ul>
							</div>
						)}
						<div
							aria-live="polite"
							aria-atomic="true"
							data-testid={testIds.liveRegion}
							className="visually-hidden"
						>
							{`${searchResults?.length} suggestions.`}
							{liveRegion && <span>&nbsp;</span>}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

const Search = _SearchInternal;

type CTAActionProps = {
	href: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

function PrimaryAction({
	children,
	href,
	...rest
}: PropsWithChildren<CTAActionProps>) {
	return (
		<Button
			as="a"
			href={href}
			className={clsx(styles["NavBar-cta-button"])}
			variant="primary"
			hasArrow={false}
			size="small"
			{...rest}
		>
			{children}
		</Button>
	);
}

function SecondaryAction({
	children,
	href,
	...rest
}: PropsWithChildren<CTAActionProps>) {
	return (
		<Button
			as="a"
			href={href}
			className={clsx(
				styles["NavBar-cta-button"],
				styles["NavBar-cta-button--secondary"]
			)}
			hasArrow={false}
			size="small"
			{...rest}
		>
			{children}
		</Button>
	);
}

export const NavBar = Object.assign(Root, {
	Link,
	Search,
	PrimaryAction,
	SecondaryAction,
	testIds,
});
