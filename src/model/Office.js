

import ApiClient from '../ApiClient';

/**
 * The Office model module.
 * @module model/Office
 * @version 1.0
 */
class Office {
    /**
     * Constructs a new <code>Office</code>.
     * @alias module:model/Office
     */
    constructor() { 
        
        Office.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Office</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Office} obj Optional instance to populate.
     * @return {module:model/Office} The populated <code>Office</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Office();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = Office.constructFromObject(data['parent']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('hierarchy')) {
                obj['hierarchy'] = ApiClient.convertToType(data['hierarchy'], 'String');
            }
            if (data.hasOwnProperty('openingLocalDate')) {
                obj['openingLocalDate'] = ApiClient.convertToType(data['openingLocalDate'], 'Date');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Office.prototype['id'] = undefined;

/**
 * @member {module:model/Office} parent
 */
Office.prototype['parent'] = undefined;

/**
 * @member {String} name
 */
Office.prototype['name'] = undefined;

/**
 * @member {String} hierarchy
 */
Office.prototype['hierarchy'] = undefined;

/**
 * @member {Date} openingLocalDate
 */
Office.prototype['openingLocalDate'] = undefined;

/**
 * @member {Boolean} new
 */
Office.prototype['new'] = undefined;






export default Office;

