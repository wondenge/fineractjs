

import ApiClient from '../ApiClient';
import GetClientStatus from './GetClientStatus';

/**
 * The GetClientsPageItemsResponse model module.
 * @module model/GetClientsPageItemsResponse
 * @version 1.0
 */
class GetClientsPageItemsResponse {
    /**
     * Constructs a new <code>GetClientsPageItemsResponse</code>.
     * @alias module:model/GetClientsPageItemsResponse
     */
    constructor() { 
        
        GetClientsPageItemsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsPageItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsPageItemsResponse} obj Optional instance to populate.
     * @return {module:model/GetClientsPageItemsResponse} The populated <code>GetClientsPageItemsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsPageItemsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetClientStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('fullname')) {
                obj['fullname'] = ApiClient.convertToType(data['fullname'], 'String');
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
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetClientsPageItemsResponse.prototype['id'] = undefined;

/**
 * @member {String} accountNo
 */
GetClientsPageItemsResponse.prototype['accountNo'] = undefined;

/**
 * @member {module:model/GetClientStatus} status
 */
GetClientsPageItemsResponse.prototype['status'] = undefined;

/**
 * @member {Boolean} active
 */
GetClientsPageItemsResponse.prototype['active'] = undefined;

/**
 * @member {String} fullname
 */
GetClientsPageItemsResponse.prototype['fullname'] = undefined;

/**
 * @member {String} displayName
 */
GetClientsPageItemsResponse.prototype['displayName'] = undefined;

/**
 * @member {Number} officeId
 */
GetClientsPageItemsResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetClientsPageItemsResponse.prototype['officeName'] = undefined;






export default GetClientsPageItemsResponse;

