import { BridgeConfiguration, PlatformConfig, PlatformIdentifier, PlatformName } from 'homebridge';

export interface HomebdirgeMagicHomeAccessory {
    uniqueId: string;
    displayName: string;
    ip: string;
}

export interface HomebridgeMagicHomePlatformConfig extends PlatformConfig {
    platform: PlatformName | PlatformIdentifier;
    name?: string;
    _bridge?: BridgeConfiguration;
    accessories: HomebdirgeMagicHomeAccessory[];
}