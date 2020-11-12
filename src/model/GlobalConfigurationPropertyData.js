

import ApiClient from '../ApiClient';

/**
 * The GlobalConfigurationPropertyData model module.
 * @module model/GlobalConfigurationPropertyData
 * @version 1.0
 */
class GlobalConfigurationPropertyData {
    /**
     * Constructs a new <code>GlobalConfigurationPropertyData</code>.
     * @alias module:model/GlobalConfigurationPropertyData
     */
    constructor() { 
        
        GlobalConfigurationPropertyData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GlobalConfigurationPropertyData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GlobalConfigurationPropertyData} obj Optional instance to populate.
     * @return {module:model/GlobalConfigurationPropertyData} The populated <code>GlobalConfigurationPropertyData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GlobalConfigurationPropertyData();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('dateValue')) {
                obj['dateValue'] = ApiClient.convertToType(data['dateValue'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('trapDoor')) {
                obj['trapDoor'] = ApiClient.convertToType(data['trapDoor'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
GlobalConfigurationPropertyData.prototype['name'] = undefined;

/**
 * @member {Boolean} enabled
 */
GlobalConfigurationPropertyData.prototype['enabled'] = undefined;

/**
 * @member {Number} value
 */
GlobalConfigurationPropertyData.prototype['value'] = undefined;

/**
 * @member {Date} dateValue
 */
GlobalConfigurationPropertyData.prototype['dateValue'] = undefined;

/**
 * @member {Number} id
 */
GlobalConfigurationPropertyData.prototype['id'] = undefined;

/**
 * @member {String} description
 */
GlobalConfigurationPropertyData.prototype['description'] = undefined;

/**
 * @member {Boolean} trapDoor
 */
GlobalConfigurationPropertyData.prototype['trapDoor'] = undefined;






export default GlobalConfigurationPropertyData;

