

import ApiClient from '../ApiClient';
import CodeValueData from './CodeValueData';
import EnumOptionData from './EnumOptionData';

/**
 * The GLAccountData model module.
 * @module model/GLAccountData
 * @version 1.0
 */
class GLAccountData {
    /**
     * Constructs a new <code>GLAccountData</code>.
     * @alias module:model/GLAccountData
     */
    constructor() { 
        
        GLAccountData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GLAccountData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GLAccountData} obj Optional instance to populate.
     * @return {module:model/GLAccountData} The populated <code>GLAccountData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GLAccountData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('glCode')) {
                obj['glCode'] = ApiClient.convertToType(data['glCode'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = EnumOptionData.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('tagId')) {
                obj['tagId'] = CodeValueData.constructFromObject(data['tagId']);
            }
            if (data.hasOwnProperty('rowIndex')) {
                obj['rowIndex'] = ApiClient.convertToType(data['rowIndex'], 'Number');
            }
            if (data.hasOwnProperty('typeId')) {
                obj['typeId'] = ApiClient.convertToType(data['typeId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GLAccountData.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GLAccountData.prototype['name'] = undefined;

/**
 * @member {String} glCode
 */
GLAccountData.prototype['glCode'] = undefined;

/**
 * @member {module:model/EnumOptionData} type
 */
GLAccountData.prototype['type'] = undefined;

/**
 * @member {module:model/CodeValueData} tagId
 */
GLAccountData.prototype['tagId'] = undefined;

/**
 * @member {Number} rowIndex
 */
GLAccountData.prototype['rowIndex'] = undefined;

/**
 * @member {Number} typeId
 */
GLAccountData.prototype['typeId'] = undefined;






export default GLAccountData;

