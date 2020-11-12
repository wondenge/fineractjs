

import ApiClient from '../ApiClient';
import GetCentersStatus from './GetCentersStatus';

/**
 * The GetCentersPageItems model module.
 * @module model/GetCentersPageItems
 * @version 1.0
 */
class GetCentersPageItems {
    /**
     * Constructs a new <code>GetCentersPageItems</code>.
     * @alias module:model/GetCentersPageItems
     */
    constructor() { 
        
        GetCentersPageItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCentersPageItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCentersPageItems} obj Optional instance to populate.
     * @return {module:model/GetCentersPageItems} The populated <code>GetCentersPageItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCentersPageItems();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetCentersStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('hierarchy')) {
                obj['hierarchy'] = ApiClient.convertToType(data['hierarchy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetCentersPageItems.prototype['id'] = undefined;

/**
 * @member {module:model/GetCentersStatus} status
 */
GetCentersPageItems.prototype['status'] = undefined;

/**
 * @member {Boolean} active
 */
GetCentersPageItems.prototype['active'] = undefined;

/**
 * @member {String} name
 */
GetCentersPageItems.prototype['name'] = undefined;

/**
 * @member {Number} officeId
 */
GetCentersPageItems.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetCentersPageItems.prototype['officeName'] = undefined;

/**
 * @member {String} hierarchy
 */
GetCentersPageItems.prototype['hierarchy'] = undefined;






export default GetCentersPageItems;

