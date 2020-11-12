

import ApiClient from '../ApiClient';
import GetSelfClientsStatus from './GetSelfClientsStatus';

/**
 * The GetSelfClientsPageItems model module.
 * @module model/GetSelfClientsPageItems
 * @version 1.0
 */
class GetSelfClientsPageItems {
    /**
     * Constructs a new <code>GetSelfClientsPageItems</code>.
     * @alias module:model/GetSelfClientsPageItems
     */
    constructor() { 
        
        GetSelfClientsPageItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsPageItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsPageItems} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsPageItems} The populated <code>GetSelfClientsPageItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsPageItems();

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
GetSelfClientsPageItems.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetSelfClientsPageItems.prototype['accountNo'] = undefined;

/**
 * @member {module:model/GetSelfClientsStatus} status
 */
GetSelfClientsPageItems.prototype['status'] = undefined;

/**
 * @member {Boolean} active
 */
GetSelfClientsPageItems.prototype['active'] = undefined;

/**
 * @member {Date} activationDate
 */
GetSelfClientsPageItems.prototype['activationDate'] = undefined;

/**
 * @member {String} fullname
 */
GetSelfClientsPageItems.prototype['fullname'] = undefined;

/**
 * @member {String} displayName
 */
GetSelfClientsPageItems.prototype['displayName'] = undefined;

/**
 * @member {Number} officeId
 */
GetSelfClientsPageItems.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetSelfClientsPageItems.prototype['officeName'] = undefined;






export default GetSelfClientsPageItems;

