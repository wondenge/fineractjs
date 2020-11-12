

import ApiClient from '../ApiClient';

/**
 * The GLAccount model module.
 * @module model/GLAccount
 * @version 1.0
 */
class GLAccount {
    /**
     * Constructs a new <code>GLAccount</code>.
     * @alias module:model/GLAccount
     */
    constructor() { 
        
        GLAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GLAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GLAccount} obj Optional instance to populate.
     * @return {module:model/GLAccount} The populated <code>GLAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GLAccount();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], [GLAccount]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('glCode')) {
                obj['glCode'] = ApiClient.convertToType(data['glCode'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('manualEntriesAllowed')) {
                obj['manualEntriesAllowed'] = ApiClient.convertToType(data['manualEntriesAllowed'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('usage')) {
                obj['usage'] = ApiClient.convertToType(data['usage'], 'Number');
            }
            if (data.hasOwnProperty('headerAccount')) {
                obj['headerAccount'] = ApiClient.convertToType(data['headerAccount'], 'Boolean');
            }
            if (data.hasOwnProperty('detailAccount')) {
                obj['detailAccount'] = ApiClient.convertToType(data['detailAccount'], 'Boolean');
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
GLAccount.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/GLAccount>} children
 */
GLAccount.prototype['children'] = undefined;

/**
 * @member {String} name
 */
GLAccount.prototype['name'] = undefined;

/**
 * @member {String} glCode
 */
GLAccount.prototype['glCode'] = undefined;

/**
 * @member {Boolean} disabled
 */
GLAccount.prototype['disabled'] = undefined;

/**
 * @member {Boolean} manualEntriesAllowed
 */
GLAccount.prototype['manualEntriesAllowed'] = undefined;

/**
 * @member {Number} type
 */
GLAccount.prototype['type'] = undefined;

/**
 * @member {Number} usage
 */
GLAccount.prototype['usage'] = undefined;

/**
 * @member {Boolean} headerAccount
 */
GLAccount.prototype['headerAccount'] = undefined;

/**
 * @member {Boolean} detailAccount
 */
GLAccount.prototype['detailAccount'] = undefined;

/**
 * @member {Boolean} new
 */
GLAccount.prototype['new'] = undefined;






export default GLAccount;

