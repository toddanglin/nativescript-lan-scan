import { LanScan as LanScanCommon } from './lan-scan.common';
export declare class LanScan extends LanScanCommon {
    private _ios;
    constructor();
    start(): void;
    stop(): void;
    pingAddress(): void;
    pingResult(PingResult: any): void;
    fetchSSIDInfo(): string;
}
