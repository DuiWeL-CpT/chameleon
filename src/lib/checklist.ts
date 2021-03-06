export interface ChecklistItem {
  id: string;
  preference: string;
  value: string;
  causeBreak: boolean;
}

export const Checklist: ChecklistItem[] = [
  {
    id: 'blockActiveMixedContent',
    preference: 'security.mixed_content.block_active_content',
    value: 'true',
    causeBreak: true,
  },
  {
    id: 'blockDisplayMixedContent',
    preference: 'security.mixed_content.block_display_content',
    value: 'true',
    causeBreak: true,
  },
  {
    id: 'disableAddonCache',
    preference: 'extensions.getAddons.cache.enabled',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableAddonUpdates',
    preference: 'extensions.update.enabled',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableBattery',
    preference: 'dom.battery.enabled',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableHistory',
    preference: 'places.history.enabled',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableCacheDisk',
    preference: 'browser.cache.disk.enable',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableCacheMem',
    preference: 'browser.cache.memory.enable',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableClipboardEvt',
    preference: 'dom.event.clipboardevents.enabled',
    value: 'false',
    causeBreak: true,
  },
  {
    id: 'disableContextMenuEvt',
    preference: 'dom.event.contextmenu.enabled',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableMobileSensors',
    preference: 'device.sensors.enabled',
    value: 'false',
    causeBreak: true,
  },
  {
    id: 'disableDNSPrefetch',
    preference: 'network.dns.disablePrefetch',
    value: 'true',
    causeBreak: false,
  },
  {
    id: 'disableDOMStorage',
    preference: 'dom.storage.enabled',
    value: 'false',
    causeBreak: true,
  },
  {
    id: 'disableDRM',
    preference: 'media.eme.enabled',
    value: 'false',
    causeBreak: true,
  },
  {
    id: 'disableGeo',
    preference: 'geo.enabled',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableGeo2',
    preference: 'geo.wifi.uri',
    value: 'Leave empty',
    causeBreak: false,
  },
  {
    id: 'disableIDN',
    preference: 'network.IDN_show_punycode',
    value: 'true',
    causeBreak: false,
  },
  {
    id: 'disableOfflineCache',
    preference: 'browser.cache.offline.enable',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disablePDF',
    preference: 'pdfjs.disabled',
    value: 'true',
    causeBreak: false,
  },
  {
    id: 'disablePocket',
    preference: 'extensions.pocket.enabled',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableResTiming',
    preference: 'dom.enable_resource_timing',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableSearchSuggest',
    preference: 'browser.search.suggest.enabled',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableSearchUpdates',
    preference: 'browser.search.update',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableSpeculatePreConn',
    preference: 'network.http.speculative-parallel-limit',
    value: '0',
    causeBreak: false,
  },
  {
    id: 'disableSSLFalseStart',
    preference: 'security.ssl.enable_false_start',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableSSLSessId',
    preference: 'security.ssl.disable_session_identifiers',
    value: 'true',
    causeBreak: false,
  },
  {
    id: 'disableTLSRTT',
    preference: 'security.tls.enable_0rtt_data',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableTRR',
    preference: 'network.trr.mode',
    value: '5',
    causeBreak: false,
  },
  {
    id: 'disableWebGL',
    preference: 'webgl.disabled',
    value: 'true',
    causeBreak: true,
  },
  {
    id: 'disableWebBeacons',
    preference: 'beacon.enabled',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'clearOfflineApps',
    preference: 'privacy.clearOnShutdown.offlineApps',
    value: 'true',
    causeBreak: false,
  },
  {
    id: 'enableSocialTrackingProtect',
    preference: 'privacy.trackingprotection.socialtracking.enabled',
    value: 'true',
    causeBreak: false,
  },
  {
    id: 'limitFonts',
    preference: 'browser.display.use_document_fonts',
    value: '0',
    causeBreak: true,
  },
  {
    id: 'limitMaxTabsUndo',
    preference: 'browser.sessionstore.max_tabs_undo',
    value: '0',
    causeBreak: false,
  },
  {
    id: 'useClickToPlay',
    preference: 'plugins.click_to_play',
    value: 'true',
    causeBreak: false,
  },
  {
    id: 'disableDataSubmission',
    preference: 'datareporting.policy.dataSubmissionEnabled',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableSafeBrowsingDownloadCheck',
    preference: 'browser.safebrowsing.downloads.enabled',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableSafeBrowsingDownloadCheck2',
    preference: 'browser.safebrowsing.downloads.remote.block_potentially_unwanted',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableSafeBrowsingDownloadCheck3',
    preference: 'browser.safebrowsing.downloads.remote.block_uncommon',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableSafeBrowsingDownloadCheck4',
    preference: 'browser.safebrowsing.downloads.remote.enabled',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableSafeBrowsingMalwareCheck',
    preference: 'browser.safebrowsing.malware.enabled',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableSafeBrowsingPhishingCheck',
    preference: 'browser.safebrowsing.phishing.enabled',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableHealthReport',
    preference: 'datareporting.healthreport.uploadEnabled',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableCrashReport',
    preference: 'browser.tabs.crashReporting.sendReport',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableTelemetryPing',
    preference: 'toolkit.telemetry.server',
    value: 'Leave empty',
    causeBreak: false,
  },
  {
    id: 'disableTelemetryReport',
    preference: 'toolkit.telemetry.enabled',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'disableTelemetryReport2',
    preference: 'toolkit.telemetry.unified',
    value: 'false',
    causeBreak: false,
  },
  {
    id: 'sessionPrivacyLevel',
    preference: 'browser.sessionstore.privacy_level',
    value: '2',
    causeBreak: false,
  },
];
