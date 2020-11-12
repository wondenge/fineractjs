import ApiClient from '../ApiClient';

/**
 * The TemplateMapper model module.
 * @module model/TemplateMapper
 * @version 1.0
 */
class TemplateMapper {
    /**
     * Constructs a new <code>TemplateMapper</code>.
     * @alias module:model/TemplateMapper
     */
    constructor() {

        TemplateMapper.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>TemplateMapper</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateMapper} obj Optional instance to populate.
     * @return {module:model/TemplateMapper} The populated <code>TemplateMapper</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateMapper();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('mapperorder')) {
                obj['mapperorder'] = ApiClient.convertToType(data['mapperorder'], 'Number');
            }
            if (data.hasOwnProperty('mapperkey')) {
                obj['mapperkey'] = ApiClient.convertToType(data['mapperkey'], 'String');
            }
            if (data.hasOwnProperty('mappervalue')) {
                obj['mappervalue'] = ApiClient.convertToType(data['mappervalue'], 'String');
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
TemplateMapper.prototype['id'] = undefined;

/**
 * @member {Number} mapperorder
 */
TemplateMapper.prototype['mapperorder'] = undefined;

/**
 * @member {String} mapperkey
 */
TemplateMapper.prototype['mapperkey'] = undefined;

/**
 * @member {String} mappervalue
 */
TemplateMapper.prototype['mappervalue'] = undefined;

/**
 * @member {Boolean} new
 */
TemplateMapper.prototype['new'] = undefined;


export default TemplateMapper;

