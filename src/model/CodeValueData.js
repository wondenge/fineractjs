

import ApiClient from '../ApiClient';

/**
 * The CodeValueData model module.
 * @module model/CodeValueData
 * @version 1.0
 */
class CodeValueData {
    /**
     * Constructs a new <code>CodeValueData</code>.
     * @alias module:model/CodeValueData
     */
    constructor() { 
        
        CodeValueData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CodeValueData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeValueData} obj Optional instance to populate.
     * @return {module:model/CodeValueData} The populated <code>CodeValueData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CodeValueData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('mandatory')) {
                obj['mandatory'] = ApiClient.convertToType(data['mandatory'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
CodeValueData.prototype['id'] = undefined;

/**
 * @member {String} name
 */
CodeValueData.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
CodeValueData.prototype['active'] = undefined;

/**
 * @member {Boolean} mandatory
 */
CodeValueData.prototype['mandatory'] = undefined;






export default CodeValueData;

