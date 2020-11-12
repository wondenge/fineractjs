

import ApiClient from '../ApiClient';

/**
 * The GroupLevel model module.
 * @module model/GroupLevel
 * @version 1.0
 */
class GroupLevel {
    /**
     * Constructs a new <code>GroupLevel</code>.
     * @alias module:model/GroupLevel
     */
    constructor() { 
        
        GroupLevel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupLevel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupLevel} obj Optional instance to populate.
     * @return {module:model/GroupLevel} The populated <code>GroupLevel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupLevel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'Number');
            }
            if (data.hasOwnProperty('superParent')) {
                obj['superParent'] = ApiClient.convertToType(data['superParent'], 'Boolean');
            }
            if (data.hasOwnProperty('levelName')) {
                obj['levelName'] = ApiClient.convertToType(data['levelName'], 'String');
            }
            if (data.hasOwnProperty('recursable')) {
                obj['recursable'] = ApiClient.convertToType(data['recursable'], 'Boolean');
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], 'Boolean');
            }
            if (data.hasOwnProperty('center')) {
                obj['center'] = ApiClient.convertToType(data['center'], 'Boolean');
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
GroupLevel.prototype['id'] = undefined;

/**
 * @member {Number} parentId
 */
GroupLevel.prototype['parentId'] = undefined;

/**
 * @member {Boolean} superParent
 */
GroupLevel.prototype['superParent'] = undefined;

/**
 * @member {String} levelName
 */
GroupLevel.prototype['levelName'] = undefined;

/**
 * @member {Boolean} recursable
 */
GroupLevel.prototype['recursable'] = undefined;

/**
 * @member {Boolean} group
 */
GroupLevel.prototype['group'] = undefined;

/**
 * @member {Boolean} center
 */
GroupLevel.prototype['center'] = undefined;

/**
 * @member {Boolean} new
 */
GroupLevel.prototype['new'] = undefined;






export default GroupLevel;

