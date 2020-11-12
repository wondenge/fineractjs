

import ApiClient from '../ApiClient';

/**
 * The GetGroupsGroupIdAccountsStatus model module.
 * @module model/GetGroupsGroupIdAccountsStatus
 * @version 1.0
 */
class GetGroupsGroupIdAccountsStatus {
    /**
     * Constructs a new <code>GetGroupsGroupIdAccountsStatus</code>.
     * @alias module:model/GetGroupsGroupIdAccountsStatus
     */
    constructor() { 
        
        GetGroupsGroupIdAccountsStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsGroupIdAccountsStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsGroupIdAccountsStatus} obj Optional instance to populate.
     * @return {module:model/GetGroupsGroupIdAccountsStatus} The populated <code>GetGroupsGroupIdAccountsStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsGroupIdAccountsStatus();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('pendingApproval')) {
                obj['pendingApproval'] = ApiClient.convertToType(data['pendingApproval'], 'Boolean');
            }
            if (data.hasOwnProperty('waitingForDisbursal')) {
                obj['waitingForDisbursal'] = ApiClient.convertToType(data['waitingForDisbursal'], 'Boolean');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('closedObligationsMet')) {
                obj['closedObligationsMet'] = ApiClient.convertToType(data['closedObligationsMet'], 'Boolean');
            }
            if (data.hasOwnProperty('closedWrittenOff')) {
                obj['closedWrittenOff'] = ApiClient.convertToType(data['closedWrittenOff'], 'Boolean');
            }
            if (data.hasOwnProperty('closedRescheduled')) {
                obj['closedRescheduled'] = ApiClient.convertToType(data['closedRescheduled'], 'Boolean');
            }
            if (data.hasOwnProperty('closed')) {
                obj['closed'] = ApiClient.convertToType(data['closed'], 'Boolean');
            }
            if (data.hasOwnProperty('overpaid')) {
                obj['overpaid'] = ApiClient.convertToType(data['overpaid'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetGroupsGroupIdAccountsStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetGroupsGroupIdAccountsStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetGroupsGroupIdAccountsStatus.prototype['description'] = undefined;

/**
 * @member {Boolean} pendingApproval
 */
GetGroupsGroupIdAccountsStatus.prototype['pendingApproval'] = undefined;

/**
 * @member {Boolean} waitingForDisbursal
 */
GetGroupsGroupIdAccountsStatus.prototype['waitingForDisbursal'] = undefined;

/**
 * @member {Boolean} active
 */
GetGroupsGroupIdAccountsStatus.prototype['active'] = undefined;

/**
 * @member {Boolean} closedObligationsMet
 */
GetGroupsGroupIdAccountsStatus.prototype['closedObligationsMet'] = undefined;

/**
 * @member {Boolean} closedWrittenOff
 */
GetGroupsGroupIdAccountsStatus.prototype['closedWrittenOff'] = undefined;

/**
 * @member {Boolean} closedRescheduled
 */
GetGroupsGroupIdAccountsStatus.prototype['closedRescheduled'] = undefined;

/**
 * @member {Boolean} closed
 */
GetGroupsGroupIdAccountsStatus.prototype['closed'] = undefined;

/**
 * @member {Boolean} overpaid
 */
GetGroupsGroupIdAccountsStatus.prototype['overpaid'] = undefined;






export default GetGroupsGroupIdAccountsStatus;

