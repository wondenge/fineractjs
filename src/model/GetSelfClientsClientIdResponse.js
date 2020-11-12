

import ApiClient from '../ApiClient';
import GetSelfClientsStatus from './GetSelfClientsStatus';
import GetSelfClientsTimeline from './GetSelfClientsTimeline';

/**
 * The GetSelfClientsClientIdResponse model module.
 * @module model/GetSelfClientsClientIdResponse
 * @version 1.0
 */
class GetSelfClientsClientIdResponse {
    /**
     * Constructs a new <code>GetSelfClientsClientIdResponse</code>.
     * GetSelfClientsClientIdResponse
     * @alias module:model/GetSelfClientsClientIdResponse
     */
    constructor() { 
        
        GetSelfClientsClientIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsClientIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsClientIdResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsClientIdResponse} The populated <code>GetSelfClientsClientIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsClientIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetSelfClientsStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('activationDate')) {
                obj['activationDate'] = ApiClient.convertToType(data['activationDate'], 'Date');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = GetSelfClientsTimeline.constructFromObject(data['timeline']);
            }
            if (data.hasOwnProperty('savingsProductId')) {
                obj['savingsProductId'] = ApiClient.convertToType(data['savingsProductId'], 'Number');
            }
            if (data.hasOwnProperty('savingsProductName')) {
                obj['savingsProductName'] = ApiClient.convertToType(data['savingsProductName'], 'String');
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfClientsClientIdResponse.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetSelfClientsClientIdResponse.prototype['accountNo'] = undefined;

/**
 * @member {module:model/GetSelfClientsStatus} status
 */
GetSelfClientsClientIdResponse.prototype['status'] = undefined;

/**
 * @member {Boolean} active
 */
GetSelfClientsClientIdResponse.prototype['active'] = undefined;

/**
 * @member {Date} activationDate
 */
GetSelfClientsClientIdResponse.prototype['activationDate'] = undefined;

/**
 * @member {String} firstname
 */
GetSelfClientsClientIdResponse.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
GetSelfClientsClientIdResponse.prototype['lastname'] = undefined;

/**
 * @member {String} displayName
 */
GetSelfClientsClientIdResponse.prototype['displayName'] = undefined;

/**
 * @member {Number} officeId
 */
GetSelfClientsClientIdResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetSelfClientsClientIdResponse.prototype['officeName'] = undefined;

/**
 * @member {module:model/GetSelfClientsTimeline} timeline
 */
GetSelfClientsClientIdResponse.prototype['timeline'] = undefined;

/**
 * @member {Number} savingsProductId
 */
GetSelfClientsClientIdResponse.prototype['savingsProductId'] = undefined;

/**
 * @member {String} savingsProductName
 */
GetSelfClientsClientIdResponse.prototype['savingsProductName'] = undefined;

/**
 * @member {Array.<String>} groups
 */
GetSelfClientsClientIdResponse.prototype['groups'] = undefined;






export default GetSelfClientsClientIdResponse;

