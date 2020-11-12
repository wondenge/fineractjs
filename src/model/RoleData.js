

import ApiClient from '../ApiClient';

/**
 * The RoleData model module.
 * @module model/RoleData
 * @version 1.0
 */
class RoleData {
    /**
     * Constructs a new <code>RoleData</code>.
     * @alias module:model/RoleData
     */
    constructor() { 
        
        RoleData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoleData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleData} obj Optional instance to populate.
     * @return {module:model/RoleData} The populated <code>RoleData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoleData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
RoleData.prototype['id'] = undefined;

/**
 * @member {String} name
 */
RoleData.prototype['name'] = undefined;






export default RoleData;

