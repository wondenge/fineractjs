

import ApiClient from '../ApiClient';
import GetClientsClientIdStatus from './GetClientsClientIdStatus';
import GetClientsTimeline from './GetClientsTimeline';

/**
 * The GetClientsClientIdResponse model module.
 * @module model/GetClientsClientIdResponse
 * @version 1.0
 */
class GetClientsClientIdResponse {
    /**
     * Constructs a new <code>GetClientsClientIdResponse</code>.
     * GetClientsClientIdResponse
     * @alias module:model/GetClientsClientIdResponse
     */
    constructor() { 
        
        GetClientsClientIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsClientIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsClientIdResponse} obj Optional instance to populate.
     * @return {module:model/GetClientsClientIdResponse} The populated <code>GetClientsClientIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsClientIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetClientsClientIdStatus.constructFromObject(data['status']);
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
                obj['timeline'] = GetClientsTimeline.constructFromObject(data['timeline']);
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
GetClientsClientIdResponse.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetClientsClientIdResponse.prototype['accountNo'] = undefined;

/**
 * @member {module:model/GetClientsClientIdStatus} status
 */
GetClientsClientIdResponse.prototype['status'] = undefined;

/**
 * @member {Boolean} active
 */
GetClientsClientIdResponse.prototype['active'] = undefined;

/**
 * @member {Date} activationDate
 */
GetClientsClientIdResponse.prototype['activationDate'] = undefined;

/**
 * @member {String} firstname
 */
GetClientsClientIdResponse.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
GetClientsClientIdResponse.prototype['lastname'] = undefined;

/**
 * @member {String} displayName
 */
GetClientsClientIdResponse.prototype['displayName'] = undefined;

/**
 * @member {Number} officeId
 */
GetClientsClientIdResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetClientsClientIdResponse.prototype['officeName'] = undefined;

/**
 * @member {module:model/GetClientsTimeline} timeline
 */
GetClientsClientIdResponse.prototype['timeline'] = undefined;

/**
 * @member {Number} savingsProductId
 */
GetClientsClientIdResponse.prototype['savingsProductId'] = undefined;

/**
 * @member {String} savingsProductName
 */
GetClientsClientIdResponse.prototype['savingsProductName'] = undefined;

/**
 * @member {Array.<String>} groups
 */
GetClientsClientIdResponse.prototype['groups'] = undefined;






export default GetClientsClientIdResponse;

